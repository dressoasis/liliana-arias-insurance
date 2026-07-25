import { Icon } from "../../../../components/ui/Icon";
import { Text } from "../../../../components/ui/Text";

export const HeroTrustIndicators = ({ indicators }) => {
  return (
    <div
      className="w-full animate-in fade-in slide-in-from-bottom-3 duration-600 fill-mode-both"
      style={{ animationDelay: "360ms" }}
    >
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
        {indicators.map((item, index) => (
          <div
            key={item.id}
            className="group flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(2, 132, 199, 0.15)",
              boxShadow: "0 1px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)"
            }}
          >
            {/* Icono con fondo de acento */}
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "rgba(2, 132, 199, 0.1)" }}
              aria-hidden="true"
            >
              <Icon name={item.icon} className="w-3 h-3 text-primary" />
            </span>

            {/* Label del chip */}
            <Text
              variant="small"
              className="font-semibold whitespace-nowrap leading-none"
              style={{ fontSize: "12.5px", color: "#1e3a5f" }}
            >
              {item.title}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};
