const escapeHtml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const parseInlineMarkdown = (text: string): string => {
  const codeSegments: string[] = [];
  let output = escapeHtml(text);

  output = output.replace(/`([^`]+)`/g, (_, code) => {
    const token = `%%CODE_${codeSegments.length}%%`;
    codeSegments.push(`<code>${escapeHtml(code)}</code>`);
    return token;
  });

  output = output.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    (_, label, href) =>
      `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`,
  );
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  return output.replace(/%%CODE_(\d+)%%/g, (_, index) => codeSegments[Number(index)] ?? "");
};

const flushParagraph = (paragraphLines: string[], htmlParts: string[]) => {
  if (paragraphLines.length === 0) {
    return;
  }

  htmlParts.push(`<p>${parseInlineMarkdown(paragraphLines.join(" "))}</p>`);
  paragraphLines.length = 0;
};

const closeList = (
  currentListType: "ul" | "ol" | null,
  listItems: string[],
  htmlParts: string[],
): "ul" | "ol" | null => {
  if (!currentListType || listItems.length === 0) {
    return null;
  }

  const listContent = listItems.map((item) => `<li>${parseInlineMarkdown(item)}</li>`).join("");
  htmlParts.push(`<${currentListType}>${listContent}</${currentListType}>`);
  listItems.length = 0;

  return null;
};

export const renderMarkdownToHtml = (source: string): string => {
  const lines = source.replaceAll("\r\n", "\n").split("\n");
  const htmlParts: string[] = [];
  const paragraphLines: string[] = [];
  const listItems: string[] = [];

  let currentListType: "ul" | "ol" | null = null;
  let inCodeBlock = false;
  let codeFenceLang = "";
  let codeLines: string[] = [];
  let quoteLines: string[] = [];

  const flushQuote = () => {
    if (quoteLines.length === 0) {
      return;
    }
    const quoteContent = quoteLines.map((line) => parseInlineMarkdown(line)).join("<br/>");
    htmlParts.push(`<blockquote><p>${quoteContent}</p></blockquote>`);
    quoteLines = [];
  };

  const flushTextBlocks = () => {
    flushParagraph(paragraphLines, htmlParts);
    currentListType = closeList(currentListType, listItems, htmlParts);
    flushQuote();
  };

  for (const line of lines) {
    if (inCodeBlock) {
      if (line.startsWith("```")) {
        const className = codeFenceLang ? ` class="language-${codeFenceLang}"` : "";
        htmlParts.push(`<pre><code${className}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        inCodeBlock = false;
        codeFenceLang = "";
        codeLines = [];
        continue;
      }
      codeLines.push(line);
      continue;
    }

    const codeFenceMatch = line.match(/^```(\w+)?\s*$/);
    if (codeFenceMatch) {
      flushTextBlocks();
      inCodeBlock = true;
      codeFenceLang = codeFenceMatch[1] ?? "";
      continue;
    }

    if (line.trim() === "") {
      flushTextBlocks();
      continue;
    }

    if (line.trim() === "---") {
      flushTextBlocks();
      htmlParts.push("<hr/>");
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      flushTextBlocks();
      const level = headingMatch[1].length;
      htmlParts.push(`<h${level}>${parseInlineMarkdown(headingMatch[2])}</h${level}>`);
      continue;
    }

    const quoteMatch = line.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      flushParagraph(paragraphLines, htmlParts);
      currentListType = closeList(currentListType, listItems, htmlParts);
      quoteLines.push(quoteMatch[1]);
      continue;
    }

    if (quoteLines.length > 0) {
      flushQuote();
    }

    const unorderedListMatch = line.match(/^\s*[-*+]\s+(.+)$/);
    if (unorderedListMatch) {
      flushParagraph(paragraphLines, htmlParts);
      if (currentListType && currentListType !== "ul") {
        currentListType = closeList(currentListType, listItems, htmlParts);
      }
      currentListType = "ul";
      listItems.push(unorderedListMatch[1]);
      continue;
    }

    const orderedListMatch = line.match(/^\s*\d+\.\s+(.+)$/);
    if (orderedListMatch) {
      flushParagraph(paragraphLines, htmlParts);
      if (currentListType && currentListType !== "ol") {
        currentListType = closeList(currentListType, listItems, htmlParts);
      }
      currentListType = "ol";
      listItems.push(orderedListMatch[1]);
      continue;
    }

    if (currentListType) {
      currentListType = closeList(currentListType, listItems, htmlParts);
    }
    paragraphLines.push(line.trim());
  }

  flushTextBlocks();

  if (inCodeBlock && codeLines.length > 0) {
    const className = codeFenceLang ? ` class="language-${codeFenceLang}"` : "";
    htmlParts.push(`<pre><code${className}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  }

  return htmlParts.join("\n");
};
