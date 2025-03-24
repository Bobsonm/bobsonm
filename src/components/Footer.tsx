import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-bobsonm-black border-t border-bobsonm-navy/30">
      <div className="bobsonm-container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-4 bg-bobsonm-smokeBlack">
              <Link to="/" className="inline-block text-2xl font-bold font-serif">
                Bobsonm<span className="text-bobsonm-gold">.</span>ru
              </Link>
              <p className="text-muted-foreground max-w-xs">
                Твоя территория отдыха. Место, где сочетаются изысканный комфорт, интеллектуальный азарт и спортивное мастерство.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-bobsonm-gold transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-bobsonm-gold transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-bobsonm-gold">Наши проекты</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/lounge" className="text-muted-foreground hover:text-bobsonm-gold transition-colors">
                    Bobsonm Lounge
                  </Link>
                </li>
                <li>
                  <Link to="/mafia" className="text-muted-foreground hover:text-bobsonm-gold transition-colors">
                    Bobsonm Mafia
                  </Link>
                </li>
                <li>
                  <Link to="/billiards" className="text-muted-foreground hover:text-bobsonm-gold transition-colors">
                    Bobsonm Бильярд
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-bobsonm-gold">Контакты</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-bobsonm-gold mt-0.5" />
                  <span className="text-muted-foreground">Москва, ул. Пушкина, д. 10</span>
                </li>
                <li>
                  <a href="tel:+74959089245" className="flex items-center gap-2 text-muted-foreground hover:text-bobsonm-gold transition-colors">
                    <Phone size={18} className="text-bobsonm-gold" />
                    <span>+7 (495) 908-92-45</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@bobsonm.ru" className="flex items-center gap-2 text-muted-foreground hover:text-bobsonm-gold transition-colors">
                    <Mail size={18} className="text-bobsonm-gold" />
                    <span>info@bobsonm.ru</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-bobsonm-navy/30 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Bobsonm. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0 flex gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-white">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-white">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}