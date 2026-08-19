import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

const handleLogoClick = () => {
  const nextCount = logoClicks + 1;

  setLogoClicks(nextCount);

  if (nextCount === 5) {
    setShowSecret(true);

    setTimeout(() => {
      setShowSecret(false);
      setLogoClicks(0);
    }, 2500);
  }
};
  const navItems = [
    { label: "Product", href: "#product" },
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {showSecret && (
  <div className="pointer-events-none fixed left-1/2 top-24 z-[100] -translate-x-1/2 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-xs font-medium text-blue-300 backdrop-blur-xl">
    You found the developer mode ✦
  </div>
)}
      <div className="mx-auto max-w-7xl px-5 pt-5 lg:px-8">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl lg:px-5">
          
          {/* Logo */}
          <button
  onClick={handleLogoClick}
  className="flex items-center gap-2.5 bg-transparent"
  aria-label="DevFlow logo"
>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
              <span className="text-sm font-black">D</span>
            </div>

            <span className="text-sm font-semibold tracking-tight">
              DevFlow
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#get-started"
              className="group flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
            >
              Get started
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/95 p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#get-started"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black"
              >
                Get started
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;