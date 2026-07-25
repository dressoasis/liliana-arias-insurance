import { Icon } from "../../ui/Icon";
import { BaseCard } from "./BaseCard";

export const InteractiveCard = ({ children, actionText = "Explorar", ...props }) => {
  return (
    <BaseCard
      hover={true}
      actions={
        <div className="flex items-center gap-1.5 text-sm font-semibold text-muted group-hover:text-primary transition-colors duration-300">
          <span>{actionText}</span>
          <div className="p-1.5 rounded-full bg-surface group-hover:bg-primary/10 transition-colors duration-300">
            <Icon name="chevron-right" className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </div>
      }
      {...props}
    >
      {children}
    </BaseCard>
  );
};
