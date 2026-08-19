import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl py-10">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="flex items-center gap-2.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
                <span className="text-sm font-black">D</span>
              </div>

              <span className="text-sm font-semibold">
                DevFlow
              </span>
            </a>

            <p className="mt-3 max-w-xs text-xs leading-5 text-white/30">
              An intelligent workspace for modern software development.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/35">
            <a
              href="#product"
              className="transition-colors hover:text-white"
            >
              Product
            </a>

            <a
              href="#features"
              className="transition-colors hover:text-white"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="transition-colors hover:text-white"
            >
              How it works
            </a>

            <a
              href="#get-started"
              className="flex items-center gap-1 transition-colors hover:text-white"
            >
              Get started
              <ArrowUpRight size={11} />
            </a>
          </div>

          {/* Simple icons */}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-[10px] text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 DevFlow. Concept product for demonstration.
          </span>

          <span>
            Built with React + Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;