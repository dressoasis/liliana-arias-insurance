import { memo } from "react";
import { clsx } from "clsx";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  ArrowRight,
  CheckCircle2, 
  ShieldCheck,
  CalendarHeart,
  Activity,
  ShieldHalf,
  CheckCircle,
  HelpCircle,
  Loader2,
  Users,
  Star,
  Shield,
  Phone,
  MessageCircle,
  HeartPulse,
  ShoppingBag,
  Smile,
  Landmark,
  Stethoscope,
  Flame
} from "lucide-react";

// Centralized icon registry
const iconRegistry = {
  menu: Menu,
  x: X,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "arrow-right": ArrowRight,
  "check-circle-2": CheckCircle2,
  "shield-check": ShieldCheck,
  "calendar-heart": CalendarHeart,
  activity: Activity,
  "shield-half": ShieldHalf,
  "check-circle": CheckCircle,
  "help-circle": HelpCircle,
  loader: Loader2,
  users: Users,
  star: Star,
  shield: Shield,
  phone: Phone,
  "message-circle": MessageCircle,
  "heart-pulse": HeartPulse,
  "shopping-bag": ShoppingBag,
  smile: Smile,
  landmark: Landmark,
  stethoscope: Stethoscope,
  flame: Flame,
};

const IconBase = ({ 
  name, 
  size = 24, 
  strokeWidth = 2, 
  className,
  ...props 
}) => {
  const IconComponent = iconRegistry[name];

  if (!IconComponent) {
    if (import.meta.env.DEV) {
      console.warn(`[Icon] "${name}" no se encuentra en el registro.`);
    }
    const FallbackIcon = iconRegistry["help-circle"];
    return <FallbackIcon size={size} strokeWidth={strokeWidth} className={clsx("shrink-0 text-accent", className)} {...props} />;
  }

  return (
    <IconComponent 
      size={size} 
      strokeWidth={strokeWidth} 
      className={clsx("shrink-0", className)} 
      {...props} 
    />
  );
};

/**
 * memo: Los iconos se renderizan dentro de listas, navbars y cards.
 * Sus props (name, size, className) son estables entre re-renders causados
 * por scroll o hover del padre. memo() evita re-renders innecesarios.
 */
export const Icon = memo(IconBase);
Icon.displayName = "Icon";
