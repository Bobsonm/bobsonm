
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Updated order with Billiards first
  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Бильярд", path: "/billiards" },
    { name: "Lounge", path: "/lounge" },
    { name: "Mafia", path: "/mafia" },
  ];

  const getPhoneNumber = () => {
    switch (location.pathname) {
      case '/lounge':
        return "+7 (901) 417-22-93";
      case '/mafia':
        return "+7 (967) 131-17-83";
      case '/billiards':
        return "+7 (495) 908-92-45";
      default:
        return "+7 (967) 131-17-83"; // Default number for homepage (Mafia number)
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled || isOpen 
          ? "bg-bobsonm-black/90 backdrop-blur-md border-bobsonm-navy/50" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="bobsonm-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold font-serif text-white transition-colors hover:text-bobsonm-gold"
          >
            Bobsonm<span className="text-bobsonm-gold">.</span>ru
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-link",
                  location.pathname === link.path && "text-bobsonm-gold"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href={`tel:${getPhoneNumber().replace(/\D/g, '')}`} 
              className="phone-button"
            >
              <Phone size={16} />
              <span>{getPhoneNumber()}</span>
            </a>
          </nav>
          
          <button 
            className="md:hidden p-2 rounded-md text-white hover:text-bobsonm-gold"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu - Updated with better contrast */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="pt-2 pb-4 px-4 space-y-3 border-t border-bobsonm-navy/50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block py-2 px-3 rounded-md transition-colors",
                  location.pathname === link.path 
                    ? "bg-bobsonm-gold/80 text-white font-medium" 
                    : "bg-bobsonm-navy/30 text-white hover:bg-bobsonm-gold/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href={`tel:${getPhoneNumber().replace(/\D/g, '')}`} 
              className="flex items-center gap-2 py-2 px-3 text-bobsonm-gold bg-bobsonm-navy/40 rounded-md"
            >
              <Phone size={16} />
              <span>{getPhoneNumber()}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
