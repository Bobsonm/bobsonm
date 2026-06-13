import { useEffect } from "react";
import { ContactButton } from "@/components/ContactButton";
import { FadeUp, Reveal } from "@/components/ParallaxSection";
import { VenueHero } from "@/components/VenueHero";
import { YandexMap } from "@/components/YandexMap";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Phone, UtensilsCrossed, Wine, Sparkles, Users } from "lucide-react";
import g1 from "@/assets/gastrobar/gastrobar-1.png.asset.json";
import g2 from "@/assets/gastrobar/gastrobar-2.png.asset.json";
import g3 from "@/assets/gastrobar/gastrobar-3.png.asset.json";
import g4 from "@/assets/gastrobar/gastrobar-4.png.asset.json";
import g5 from "@/assets/gastrobar/gastrobar-5.png.asset.json";
import g6 from "@/assets/gastrobar/gastrobar-6.png.asset.json";

const gallery = [
  { src: g1.url, alt: "Зал гастробара Bobsonm" },
  { src: g2.url, alt: "Уютная зона с каллиграфией" },
  { src: g3.url, alt: "VIP-зона с большим экраном" },
  { src: g4.url, alt: "Основной зал, синие диваны" },
  { src: g5.url, alt: "Полукруглые диваны и столики" },
  { src: g6.url, alt: "Bobsonm Lounge интерьер" },
];

const Gastrobar = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    {
      icon: <UtensilsCrossed size={24} className="text-primary" />,
      title: "Авторская кухня",
      description:
        "Сезонное меню от шеф-повара: яркие вкусы, локальные продукты и подача, которая удивляет.",
    },
    {
      icon: <Wine size={24} className="text-primary" />,
      title: "Винная и барная карта",
      description:
        "Авторские коктейли, классика и тщательно подобранные вина — для каждого блюда и настроения.",
    },
    {
      icon: <Sparkles size={24} className="text-primary" />,
      title: "Атмосфера вечера",
      description:
        "Тёплый свет, живая музыка и уютные посадки — идеально для свиданий и встреч с друзьями.",
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: "События и компании",
      description:
        "Принимаем большие компании, организуем банкеты, дни рождения и корпоративные мероприятия.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-16 text-foreground md:pt-20">
      <VenueHero
        eyebrow="Gastrobar direction"
        title="Bobsonm"
        accent="Гастробар"
        description="Авторская кухня, винная карта и вечерний свет — пространство для ужина, встреч и красивой подачи без лишнего шума."
        imageSrc="/lovable-uploads/adb9981e-55c4-4f48-8d78-0eae2fb0fe09.png"
        imageAlt="Bobsonm Гастробар"
        actions={<ContactButton size="lg" phoneNumber="+7 (967) 131-17-83">Позвонить и забронировать</ContactButton>}
        stats={[
          { label: "Формат", value: "авторская кухня" },
          { label: "Вечер", value: "бар + ужин + встречи" },
          { label: "Бронь", value: "по звонку" },
        ]}
      />

      {/* About */}
      <section className="bobsonm-container py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              О гастробаре
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mb-6 text-foreground/72">
              Bobsonm Гастробар — место, где встречаются гастрономия и
              расслабленный вечерний ритм. Мы соединили внимательную авторскую
              кухню, продуманную барную карту и живую атмосферу, чтобы каждый
              визит был событием.
            </p>
            <p className="text-foreground/62">
              Заходите поужинать после работы, отметить важный день или просто
              провести вечер с друзьями за бокалом и любимым блюдом.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="bobsonm-container px-4">
          <FadeUp>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">
              Что вас ждёт
            </h2>
            <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
              Несколько причин заглянуть в Bobsonm Гастробар
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((f, index) => (
              <Reveal key={index}>
                <div className="premium-card h-full p-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-3">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl text-foreground">{f.title}</h3>
                      <p className="text-foreground/72">{f.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-20 bobsonm-container px-4">
        <FadeUp>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl">
            Контакты
          </h2>
          <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-foreground/68">
            Забронируйте столик в Bobsonm Гастробар
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="premium-card p-8">
              <div className="flex items-center mb-6">
                <Phone size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Телефон для брони</h3>
                  <a
                    href="tel:+79671311783"
                    className="text-xl text-gold-shine hover:opacity-80"
                  >
                    +7 (967) 131-17-83
                  </a>
                </div>
              </div>

              <Separator className="my-6 bg-border" />

              <div className="flex items-center mb-6">
                <Clock size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Часы работы</h3>
                  <p className="text-foreground/75">Ежедневно с 12:00 до 00:00</p>
                </div>
              </div>

              <Separator className="my-6 bg-border" />

              <div className="flex items-center">
                <MapPin size={24} className="mr-4 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">Адрес</h3>
                  <p className="text-foreground/75">Москва, Нахимовский проспект 35к2</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <ContactButton size="lg" className="w-full" phoneNumber="+7 (967) 131-17-83">
                  Позвонить и забронировать
                </ContactButton>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <YandexMap src="https://yandex.ru/map-widget/v1/?text=Москва%2C%20Нахимовский%20проспект%2035к2&z=16" />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Gastrobar;
