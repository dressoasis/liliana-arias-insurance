import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/Button";

export const HeroActions = ({ buttons }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
      style={{ animationDelay: "260ms" }}
    >
      {buttons.map((btn, index) => {
        const isExternal = btn.href.startsWith("http") || btn.href.startsWith("tel:");
        const isPrimary = btn.variant === "primary";
        return (
          <Button
            key={index}
            variant={btn.variant}
            size="lg"
            className={[
              "w-full sm:w-auto px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 ease-out",
              isPrimary
                ? [
                    "bg-[#0284c7] text-white border-transparent",
                    "shadow-[0_4px_24px_rgba(2,132,199,0.30)]",
                    "hover:bg-[#0369a1] hover:shadow-[0_8px_32px_rgba(2,132,199,0.42)] hover:-translate-y-0.5",
                    "active:translate-y-0 active:shadow-[0_4px_16px_rgba(2,132,199,0.22)]",
                  ].join(" ")
                : [
                    "border-2 border-[#0284c7]/30 text-[#0284c7] bg-white/60 backdrop-blur-sm",
                    "hover:border-[#0284c7]/60 hover:bg-white hover:-translate-y-0.5",
                    "active:translate-y-0",
                  ].join(" ")
            ].join(" ")}
            onClick={() => {
              if (isExternal) {
                window.location.href = btn.href;
              } else {
                navigate(btn.href);
              }
            }}
          >
            {btn.label}
          </Button>
        );
      })}
    </div>
  );
};
