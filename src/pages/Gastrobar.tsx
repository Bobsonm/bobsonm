import { useEffect } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { YandexMap } from "@/components/YandexMap";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Phone, UtensilsCrossed, Wine, Sparkles, Users } from "lucide-react";

const Gastrobar = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    {
      icon: <UtensilsCrossed size={24} className="text-bobsonm-gold" />,
      title: "Авторская кухня",
      description:
        "Сезонное меню от шеф-повара: яркие вкусы, локальные продукты и подача, которая удивляет.",
    },
    {
      icon: <Wine size={24} className="text-bobsonm-gold" />,
      title: "Винная и барная карта",
      description:
        "Авторские коктейли, классика и тщательно подобранные вина — для каждого блюда и настроения.",
    },
    {
      icon: <Sparkles size={24} className="text-bobsonm-gold" />,
      title: "Атмосфера вечера",
      description:
        "Тёплый свет, живая музыка и уютные посадки — идеально для свиданий и встреч с друзьями.",
    },
    {
      icon: <Users size={24} className="text-bobsonm-gold" />,
      title: "События и компании",
      description:
        "Принимаем большие компании, организуем банкеты, дни рождения и корпоративные мероприятия.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-bobsonm-black pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative flex items-center justify-center h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bobsonm-black/70 via-bobsonm-black/50 to-bobsonm-black" />

        <div className="relative bobsonm-container text-center z-10 px-4">
          <AnimatedSection delay={300}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 animate-text-shine">
              Bobsonm <span className="text-bobsonm-gold">Гастробар</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={600} direction="up">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-white max-w-3xl mx-auto">
              Авторская кухня, бар и атмосфера настоящего вечера
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={900}>
            <a
              href="tel:+79671311783"
              className="inline-flex items-center justify-center rounded-md bg-bobsonm-gold text-bobsonm-black hover:bg-bobsonm-goldLight transition-colors px-6 py-3 mt-2 font-medium"
            >
              <Phone size={20} className="mr-2" />
              Забронировать стол
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* About */}
      <section className="bobsonm-container py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-6 text-gradient-gold">
              О гастробаре
            </h3>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={200}>
            <p className="text-white mb-6">
              Bobsonm Гастробар — место, где встречаются гастрономия и
              расслабленный вечерний ритм. Мы соединили внимательную авторскую
              кухню, продуманную барную карту и живую атмосферу, чтобы каждый
              визит был событием.
            </p>
            <p className="text-white">
              Заходите поужинать после работы, отметить важный день или просто
              провести вечер с друзьями за бокалом и любимым блюдом.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-bobsonm-navy/5 to-bobsonm-navy/15">
        <div className="bobsonm-container px-4">
          <AnimatedSection direction="up">
            <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">
              Что вас ждёт
            </h3>
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              Несколько причин заглянуть в Bobsonm Гастробар
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((f, index) => (
              <AnimatedSection key={index} direction="up" delay={100 * index}>
                <div className="glass-panel p-6 rounded-lg h-full border border-bobsonm-navy/30 hover:border-bobsonm-navy/60 transition-all hover:translate-y-[-5px]">
                  <div className="flex items-start">
                    <div className="p-3 bg-bobsonm-navy/20 rounded-full mr-4">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-white">{f.title}</h4>
                      <p className="text-white/80">{f.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-20 bobsonm-container px-4">
        <AnimatedSection direction="up">
          <h3 className="text-3xl font-serif font-semibold mb-2 text-center text-gradient-gold">
            Контакты
          </h3>
          <p className="text-white text-center mb-12 max-w-2xl mx-auto">
            Забронируйте столик в Bobsonm Гастробар
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection direction="right" delay={200}>
            <div className="glass-panel p-8 rounded-lg border border-bobsonm-navy/30">
              <div className="flex items-center mb-6">
                <Phone size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium text-white">Телефон для брони</h4>
                  <a
                    href="tel:+79671311783"
                    className="text-xl font-semibold text-bobsonm-gold hover:text-bobsonm-goldLight transition-colors"
                  >
                    +7 (967) 131-17-83
                  </a>
                </div>
              </div>

              <Separator className="my-6 bg-bobsonm-navy/30" />

              <div className="flex items-center mb-6">
                <Clock size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium text-white">Часы работы</h4>
                  <p className="text-white">Ежедневно с 12:00 до 00:00</p>
                </div>
              </div>

              <Separator className="my-6 bg-bobsonm-navy/30" />

              <div className="flex items-center">
                <MapPin size={24} className="text-bobsonm-gold mr-4" />
                <div>
                  <h4 className="font-medium text-white">Адрес</h4>
                  <p className="text-white">Москва, Нахимовский проспект 35к2</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="tel:+79671311783"
                  className="inline-flex items-center justify-center rounded-md bg-bobsonm-gold text-bobsonm-black px-6 py-3 font-medium hover:bg-bobsonm-goldLight transition-colors w-full"
                >
                  <Phone size={20} className="mr-2" />
                  Позвонить и забронировать
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={400}>
            <YandexMap src="https://yandex.ru/map-widget/v1/?text=Москва%2C%20Нахимовский%20проспект%2035к2&z=16" />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Gastrobar;
