
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bobsonm-black pt-16 md:pt-20">
      <div className="text-center px-4 max-w-lg">
        <AnimatedSection delay={300}>
          <h1 className="text-7xl font-serif font-bold mb-4 text-bobsonm-gold">404</h1>
        </AnimatedSection>
        
        <AnimatedSection delay={500} direction="up">
          <h2 className="text-2xl sm:text-3xl font-medium mb-6">Страница не найдена</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={700} direction="up">
          <p className="text-muted-foreground mb-10">
            К сожалению, страница, которую вы ищете, не существует или была перемещена.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={900} direction="up" className="space-y-4">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center rounded-md bg-bobsonm-gold text-bobsonm-black px-4 py-2 font-medium hover:bg-bobsonm-goldLight transition-colors"
          >
            <Home size={18} className="mr-2" />
            На главную
          </Link>
          
          <div className="mt-4">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-muted-foreground hover:text-white transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Вернуться назад
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default NotFound;
