import { Image } from "../../ui/Image";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { Badge } from "../../ui/Badge";
import { BaseCard } from "./BaseCard";

export const ArticleCard = ({ title, excerpt, imageSrc, category, date, ...props }) => {
  return (
    <BaseCard
      spacing="none"
      hover={true}
    >
      <div className="flex flex-col h-full">
          {/* Header Image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
             <Image 
               src={imageSrc} 
               alt={title} 
               lazy={true}
               className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" 
             />
             {category && (
               <div className="absolute top-4 left-4 z-10">
                 <Badge variant="primary" className="shadow-sm backdrop-blur-md bg-background/95">
                   {category}
                 </Badge>
               </div>
             )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            {date && (
              <Text variant="caption" className="mb-3 block font-medium">
                {date}
              </Text>
            )}
            <Heading level="h4" className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
              {title}
            </Heading>
            <Text variant="muted" className="text-sm line-clamp-3 leading-relaxed mt-auto">
              {excerpt}
            </Text>
          </div>
        </div>
    </BaseCard>
  );
};
