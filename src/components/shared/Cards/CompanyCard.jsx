import { Image } from "../../ui/Image";
import { BaseCard } from "./BaseCard";

export const CompanyCard = ({ name, logoSrc, ...props }) => {
  return (
    <BaseCard
      variant="outlined"
      spacing="sm"
      hover={true}
      className="items-center justify-center text-center bg-transparent hover:bg-surface/50"
      {...props}
    >
      <div className="flex flex-col items-center justify-center h-20 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300">
          {logoSrc ? (
            <Image 
              src={logoSrc} 
              alt={`Logo de ${name}`} 
              objectFit="contain"
              lazy={true}
              className="h-10 w-auto max-w-[140px]" 
            />
          ) : (
            <span className="font-bold text-lg text-muted group-hover:text-text transition-colors">{name}</span>
          )}
        </div>
    </BaseCard>
  );
};
