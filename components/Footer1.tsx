export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="font-bold text-xs bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                L
              </span>
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            LeverAcc
          </span>
        </div>

        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-white transition-colors">
            Documentation
          </a>
          <a href="#" className="hover:text-white transition-colors">
            X
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Github
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          © 2025 LeverAcc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
