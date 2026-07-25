import { Badge } from "../../../../components/ui/Badge";
import { Heading } from "../../../../components/ui/Heading";
import { Text } from "../../../../components/ui/Text";
import { heroContent } from "../../../../content/home/hero";

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-6">
      {/* Badge — primer elemento animado */}
      <Badge
        variant="primary"
        className="px-4 py-1.5 text-[13px] font-semibold tracking-wide shadow-sm shadow-primary/20 animate-in fade-in slide-in-from-bottom-3 duration-600 fill-mode-both"
        style={{ animationDelay: "0ms" }}
      >
        {heroContent.badge}
      </Badge>

      {/* Título H1 — jerarquía máxima */}
      <Heading
        level="h1"
        className="text-[2.6rem] md:text-5xl lg:text-[3.75rem] xl:text-[4rem] font-extrabold tracking-tight leading-[1.08] text-balance max-w-[16ch] lg:max-w-none animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both"
        style={{ animationDelay: "80ms", color: "#0c1a2e" }}
      >
        {heroContent.title}
      </Heading>

      {/* Descripción */}
      <Text
        variant="lead"
        className="max-w-[44ch] text-balance text-[1.05rem] md:text-[1.15rem] leading-[1.7] font-normal animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
        style={{ animationDelay: "160ms", color: "#475569" }}
      >
        {heroContent.description}
      </Text>
    </div>
  );
};
