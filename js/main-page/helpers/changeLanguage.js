const selectUALanguage = document.getElementById("ua-language");
const selectENLanguage = document.getElementById("en-language");
const headerLinks = document.querySelectorAll(".header-link");
const heroHeaderH1 = document.getElementById("hero-header-h1");
const heroHeaderP = document.getElementById("hero-header-p");
const heroHeaderButton = document.getElementById("hero-header-button");
const sectionHeaders = document.querySelectorAll(".section-header");

let aboutStudioSection = [
  document.getElementById("about-studio-main-text"),
  document.getElementById("about-studio-more-text-lg"),
];

let servicesSection = [
  document.getElementById("interior-design-card-header"),
  document.getElementById("interior-design-card-description"),
  document.getElementById("decorative-services-card-header"),
  document.getElementById("decorative-services-card-description"),
  document.getElementById("space-planning-card-header"),
  document.getElementById("space-planning-card-description"),
  document.getElementById("project-management-card-header"),
  document.getElementById("project-management-card-description"),
  document.getElementById("consultation-button"),
];

let portfolioSection = [
  document.querySelectorAll("#filter"),
  document.querySelectorAll(".more"),
];

let pricingSection = [
  document.querySelectorAll(".pricing-type"),
  document.querySelectorAll(".per-month"),
  document.querySelectorAll("#pricing-service"),
  document.querySelectorAll(".buy-now-button"),
];

let testimonialsSection = [
  document.querySelectorAll(".name"),
  document.querySelectorAll(".position"),
];

const orderACallButton = document.getElementById("order-a-call-button");

let footer = [
  document.getElementById("footer-description"),
  document.querySelectorAll("#license"),
  document.getElementById("navigation"),
  document.querySelectorAll(".footer-navigation-link"),
  document.getElementById("contacts"),
  document.getElementById("address"),
  document.getElementById("email"),
  document.getElementById("phones"),
];

export function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

const language = {
  en: {
    headerLinks: ["Services", "Portfolio", "Pricing"],
    heroHeaderH1: "We create your space better",
    heroHeaderP:
      "Our team creates comfortable spaces for our clients. We've been designing your everyday life and work through great ideas since 1999.",
    heroHeaderButton: "GET STARTED",
    sectionHeaders: [
      "About <span>Studio</span>",
      "Our <span>Services</span>",
      "Our <span>Portfolio</span>",
      "Our <span>Pricing</span>",
      "What <span>People Say</span>",
      "Do you have <br><span>any question?</span>",
    ],
    aboutStudioSection: [
      "Interiart is an award-winning architecture and interior design practice based in NYC. We work internationally on projects of residential & commercial interior design that require a creative approach. Our talented and experienced designers leverage their knowledge and expertise to create unique and comfortable interiors for you.",
      "<br>Our team knows that interior design can be stressful for the client and we do our best to make it as easy as possible. We listen to your needs, ideas, and inputs. And most importantly, we make it exciting and enjoyable for our clients.",
    ],
    servicesSection: [
      "INTERIOR DESIGN",
      "Interior design services offer a vast variety of solutions for our clients' homes and offices.",
      "DECORATIVE SERVICES",
      "Our professional decorators will be happy to help you change your house's inner look.",
      "SPACE PLANNING",
      "We create better interior experiences through our space planning services.",
      "PROJECT MANAGEMENT",
      "We provide proper project management as it's one of the main success factors in interior design.",
      "FREE CONSULTATION",
    ],
    portfolioSection: [
      "ALL",
      "COMMERCIAL",
      "RESIDENTIAL",
      "OFFICE",
      "OTHER",
      "READ MORE",
      "VIEW MORE",
      "VIEW MORE",
    ],
    pricingSection: [
      "Basic",
      "Standart",
      "Premium",
      "per month",
      "per month",
      "per month",
      "Interior Design",
      "Project Discussion",
      "Space Planning",
      "Online Consultation",
      "Color Analysis",
      "Space Planning",
      "Home Remodeling",
      "3D Interior Model",
      "Concept Development",
      "Decoration Services",
      "Interior Architecture",
      "Flooring Installation",
      "BUY NOW",
      "BUY NOW",
      "BUY NOW",
    ],
    testimonialsSection: [
      "Annette Black",
      "Marvin McKinney",
      "Joanna Gaines",
      "Marvin McKinney",
      "Nate Berkus",
      "Kelly Wearslter",
      "Pavlo Rymarovych",
      "Jonathan Adler",
      "Pavlo Rymarovych",
      "Dmytro Truten",
      "Merchandising Associate",
      "Administrator",
      "Interior Designer",
      "Administrator",
      "Interior Designer",
      "Interior Designer",
      "Backend Developer",
      "Interior Designer",
      "Backend Developer",
      "Frontend Developer",
    ],
    orderACallButton: "ORDER A CALL",
    footer: [
      "We are one of the leading interior design and remodeling studios available for all ofyour residential and commercial interior design needs.",
      "© 2023 id Studio. All Rights Reserved.",
      "© 2023 id Studio. All Rights Reserved.",
      "NAVIGATION",
      "About",
      "Services",
      "Portfolio",
      "Pricing",
      "Testimonials",
      "CONTACTS",
      "ADDRESS",
      "EMAIL",
      "PHONES",
    ],
  },
  ua: {
    headerLinks: ["Послуги", "Портфоліо", "Ціни"],
    heroHeaderH1: "Ми робимо ваш простір кращим",
    heroHeaderP:
      "Наша команда створює комфортний простір для наших клієнтів. З 1999 року ми створюємо ваше повсякденне життя та працюємо над чудовими ідеями.",
    heroHeaderButton: "РОЗПОЧАТИ",
    sectionHeaders: [
      "Про <span>Студію</span>",
      "Наші <span>Послуги</span>",
      "Наше <span>Портфоліо</span>",
      "Наші <span>Ціни</span>",
      "Що <span>Кажуть Люди</span>",
      "Маєте <br><span>Запитання?</span>",
    ],
    aboutStudioSection: [
      "Interiart – це нагороджена практика архітектури та дизайну інтер’єрів, що базується в Нью-Йорку. Ми працюємо над міжнародними проектами дизайну житлових та комерційних інтер'єрів, які потребують творчого підходу. Наші талановиті та досвідчені дизайнери використовують свої знання та досвід, щоб створити унікальні та комфортні інтер’єри для вас.",
      "<br>Наша команда знає, що дизайн інтер'єру може бути стрессово для клієнта, і ми докладаємо всіх зусиль, щоб зробити його максимально легким. Ми прислухаємося до ваших потреб, ідей та побажань. А головне, ми робимо це захоплюючим і приємним для наших клієнтів.",
    ],
    servicesSection: [
      "ДИЗАЙН ІНТЕР'ЄРУ",
      "Послуги з дизайну інтер’єру пропонують широкий вибір рішень для дому та офісу наших клієнтів.",
      "ДЕКОРАТИВНІ ПОСЛУГИ",
      "Наші професійні декоратори з радістю допоможуть вам змінити внутрішній вигляд вашого будинку.",
      "ПЛАНУВАННЯ ПРОСТОРУ",
      "Ми створюємо кращий інтер’єр за допомогою наших послуг з планування простору.",
      "УПРАВЛІННЯ ПРОЕКТАМИ",
      "Ми забезпечуємо належне управління проектами, оскільки це один із головних факторів успіху в дизайні інтер’єру.",
      "БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ",
    ],
    portfolioSection: [
      "ВСІ",
      "КОМЕРЦІЙНІ",
      "ЖИТЛОВІ",
      "ОФІСНІ",
      "ІНШІ",
      "БІЛЬШЕ",
      "БІЛЬШЕ",
      "БІЛЬШЕ",
    ],
    pricingSection: [
      "Базовий",
      "Стандарт",
      "Преміум",
      "на місяць",
      "на місяць",
      "на місяць",
      "Дизайн Інтер'єру",
      "Обговорення Проекту",
      "Планування Простору",
      "Онлайн Консультація",
      "Аналіз Кольорів",
      "Планування Простору",
      "Ремонт Будинку",
      "3D Модель Інтер'єру",
      "Концептуальна Розробка",
      "Послуги Декорування",
      "Архітектура Інтер'єру",
      "Монтаж Підлоги",
      "ПРИДБАТИ",
      "ПРИДБАТИ",
      "ПРИДБАТИ",
    ],
    testimonialsSection: [
      "Аннет Блек",
      "Марвін МакКінні",
      "Джоанна Гейнс",
      "Марвін МакКінні",
      "Нейт Беркус",
      "Келлі Вірстлер",
      "Павло Римарович",
      "Джонатан Адлер",
      "Павло Римарович",
      "Дмитро Трутень",
      "Асистент з мерчандайзингу",
      "Адміністратор",
      "Дизайнер інтер'єру",
      "Адміністратор",
      "Дизайнер інтер'єру",
      "Дизайнер інтер'єру",
      "Бекенд-розробник",
      "Дизайнер інтер'єру",
      "Бекенд-розробник",
      "Фронтенд-розробник",
    ],
    orderACallButton: "ЗАМОВИТИ ДЗВІНОК",
    footer: [
      "Ми є однією з провідних студій дизайну та реконструкції інтер'єру, яка може задовольнити всі ваші потреби в дизайні житлових і комерційних приміщень.",
      "© 2023 id Studio. Всі права захищені.",
      "© 2023 id Studio. Всі права захищені.",
      "НАВІГАЦІЯ",
      "Про Студію",
      "Послуги",
      "Портфоліо",
      "Ціни",
      "Відгуки",
      "КОНТАКТИ",
      "АДРЕСА",
      "ЕЛЕКТРОННА ПОШТА",
      "ТЕЛЕФОНИ",
    ],
  },
};

// Check if a hash value exists in the URL
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash === "#ua") {
    for (let i = 0; i < headerLinks.length; i++) {
      headerLinks[i].textContent = language.ua.headerLinks[i];
    }
    selectENLanguage.children[0].textContent = "UA";
    selectUALanguage.children[0].textContent = "EN";

    heroHeaderH1.textContent = language.ua.heroHeaderH1;
    heroHeaderP.textContent = language.ua.heroHeaderP;
    heroHeaderButton.textContent = language.ua.heroHeaderButton;

    for (let i = 0; i < sectionHeaders.length; i++) {
      sectionHeaders[i].innerHTML = language.ua.sectionHeaders[i];
      sectionHeaders[i].classList.add("section-header-ua");
    }

    // About Studio Section
    for (let i = 0; i < aboutStudioSection.length; i++) {
      aboutStudioSection[i].innerHTML = language.ua.aboutStudioSection[i];
    }

    // Services Section
    for (let i = 0; i < servicesSection.length; i++) {
      if (servicesSection[i].length > 1) {
        servicesSection[i] = Array.from(servicesSection[i]);
      }
    }
    servicesSection = servicesSection.flat();

    for (let i = 0; i < servicesSection.length; i++) {
      servicesSection[i].textContent = language.ua.servicesSection[i];
    }

    // Portfolio Section
    for (let i = 0; i < portfolioSection.length; i++) {
      if (portfolioSection[i].length > 1) {
        portfolioSection[i] = Array.from(portfolioSection[i]);
      }
    }
    portfolioSection = portfolioSection.flat();

    for (let i = 0; i < portfolioSection.length; i++) {
      portfolioSection[i].textContent = language.ua.portfolioSection[i];
    }

    // Pricing Section
    for (let i = 0; i < pricingSection.length; i++) {
      if (pricingSection[i].length > 1) {
        pricingSection[i] = Array.from(pricingSection[i]);
      }
    }
    pricingSection = pricingSection.flat();

    for (let i = 0; i < pricingSection.length; i++) {
      pricingSection[i].textContent = language.ua.pricingSection[i];
    }

    // Testimonials
    for (let i = 0; i < testimonialsSection.length; i++) {
      if (testimonialsSection[i].length > 1) {
        testimonialsSection[i] = Array.from(testimonialsSection[i]);
      }
    }
    testimonialsSection = testimonialsSection.flat();

    for (let i = 0; i < testimonialsSection.length; i++) {
      testimonialsSection[i].textContent = language.ua.testimonialsSection[i];
    }
    // OrderCall Button
    orderACallButton.textContent = language.ua.orderACallButton;

    // Footer
    for (let i = 0; i < footer.length; i++) {
      if (footer[i].length > 1) {
        footer[i] = Array.from(footer[i]);
      }
    }
    footer = footer.flat();

    for (let i = 0; i < footer.length; i++) {
      footer[i].textContent = language.ua.footer[i];
    }
  } else {
    for (let i = 0; i < headerLinks.length; i++) {
      headerLinks[i].textContent = language.en.headerLinks[i];
    }
    selectENLanguage.children[0].textContent = "EN";
    selectUALanguage.children[0].textContent = "UA";

    heroHeaderH1.textContent = language.en.heroHeaderH1;
    heroHeaderP.textContent = language.en.heroHeaderP;
    heroHeaderButton.textContent = language.en.heroHeaderButton;

    for (let i = 0; i < sectionHeaders.length; i++) {
      sectionHeaders[i].innerHTML = language.en.sectionHeaders[i];
      sectionHeaders[i].classList.remove("section-header-ua");
    }

    // About Studio Section
    for (let i = 0; i < aboutStudioSection.length; i++) {
      aboutStudioSection[i].innerHTML= language.en.aboutStudioSection[i];
    }

    // Services Section
    for (let i = 0; i < servicesSection.length; i++) {
      if (servicesSection[i].length > 1) {
        servicesSection[i] = Array.from(servicesSection[i]);
      }
    }
    servicesSection = servicesSection.flat();

    for (let i = 0; i < servicesSection.length; i++) {
      servicesSection[i].textContent = language.en.servicesSection[i];
    }

    // Portfolio Section
    for (let i = 0; i < portfolioSection.length; i++) {
      if (portfolioSection[i].length > 1) {
        portfolioSection[i] = Array.from(portfolioSection[i]);
      }
    }
    portfolioSection = portfolioSection.flat();

    for (let i = 0; i < portfolioSection.length; i++) {
      portfolioSection[i].textContent = language.en.portfolioSection[i];
    }

    // Pricing Section
    for (let i = 0; i < pricingSection.length; i++) {
      if (pricingSection[i].length > 1) {
        pricingSection[i] = Array.from(pricingSection[i]);
      }
    }
    pricingSection = pricingSection.flat();

    for (let i = 0; i < pricingSection.length; i++) {
      pricingSection[i].textContent = language.en.pricingSection[i];
    }

    // Testimonials
    for (let i = 0; i < testimonialsSection.length; i++) {
      if (testimonialsSection[i].length > 1) {
        testimonialsSection[i] = Array.from(testimonialsSection[i]);
      }
    }
    testimonialsSection = testimonialsSection.flat();

    for (let i = 0; i < testimonialsSection.length; i++) {
      testimonialsSection[i].textContent = language.en.testimonialsSection[i];
    }

    // OrderCall Button
    orderACallButton.textContent = language.en.orderACallButton;

    // Footer
    for (let i = 0; i < footer.length; i++) {
      if (footer[i].length > 1) {
        footer[i] = Array.from(footer[i]);
      }
    }
    footer = footer.flat();

    for (let i = 0; i < footer.length; i++) {
      footer[i].textContent = language.en.footer[i];
    }
  }
}
