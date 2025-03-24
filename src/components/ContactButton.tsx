
import { useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  phoneNumber?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export function ContactButton({
  variant = "primary",
  size = "md",
  className,
  phoneNumber,
  showIcon = true,
  children,
}: ContactButtonProps) {
  const location = useLocation();
  
  const getPhoneNumber = () => {
    if (phoneNumber) return phoneNumber;
    
    // Default phone numbers based on route
    switch (location.pathname) {
      case '/lounge':
        return "+7 (901) 417-22-93";
      case '/mafia':
        return "+7 (967) 131-17-83";
      case '/billiards':
        return "+7 (495) 908-92-45";
      default:
        return "+7 (495) 908-92-45"; // Default for homepage
    }
  };
  
  const phone = getPhoneNumber();
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Sizing classes
  const sizeClasses = {
    sm: "text-xs py-1.5 px-3",
    md: "text-sm py-2 px-4",
    lg: "text-base py-3 px-6",
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-bobsonm-gold text-bobsonm-black hover:bg-bobsonm-goldLight focus:ring-2 focus:ring-bobsonm-gold focus:ring-offset-2 focus:ring-offset-bobsonm-black",
    outline: "bg-transparent border border-bobsonm-gold text-bobsonm-gold hover:bg-bobsonm-gold/10 focus:ring-2 focus:ring-bobsonm-gold focus:ring-offset-2 focus:ring-offset-bobsonm-black",
    ghost: "bg-transparent text-bobsonm-gold hover:bg-bobsonm-gold/10 focus:ring-1 focus:ring-bobsonm-gold",
  };
  
  return (
    <a
      href={`tel:${cleanPhone}`}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-all",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {showIcon && <Phone size={size === "sm" ? 14 : size === "md" ? 16 : 18} className={cn("mr-2", size === "sm" ? "-ml-0.5" : "-ml-1")} />}
      {children || phone}
    </a>
  );
}
