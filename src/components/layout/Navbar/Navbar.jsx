import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { NavigationMenu } from "../../navigation/NavigationMenu";
import { Container } from "../../ui/Container";
import { clsx } from "clsx";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] border-b",
          isScrolled
            ? "bg-white/85 backdrop-blur-2xl border-slate-200/60 shadow-[0_1px_20px_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent border-transparent py-5"
        )}
        role="banner"
      >
        <Container>
          {/* Logo recibe más espacio (min-w) para que el logotipo horizontal respire */}
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center z-50 relative min-w-fit">
              <Logo />
            </div>
            <div className="flex-1 flex justify-end items-center">
              <NavigationMenu />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
