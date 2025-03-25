
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-bobsonm-black border-t border-bobsonm-navy/30 py-8">
      <div className="bobsonm-container text-center">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center justify-center p-3 rounded-full bg-bobsonm-navy/30 text-white hover:bg-bobsonm-navy/60 transition-all duration-300 border border-bobsonm-gold/20 hover:border-bobsonm-gold/40 mb-6"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
        
        <p className="text-sm text-white mt-4">
          © {currentYear} Bobsonm. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
