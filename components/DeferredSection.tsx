"use client";

import React, { useEffect, useRef, useState } from "react";

interface DeferredSectionProps {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
  placeholderClassName?: string;
}

const DeferredSection: React.FC<DeferredSectionProps> = ({
  children,
  className,
  rootMargin = "300px 0px",
  placeholderClassName = "min-h-[320px]",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? children : <div className={placeholderClassName} aria-hidden />}
    </div>
  );
};

export default DeferredSection;
