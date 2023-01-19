const selectUALanguage = document.getElementById("ua-language");
const selectENLanguage = document.getElementById("en-language");
const headerLinks = document.querySelectorAll(".header-link");
const heroHeaderH1 = document.getElementById("hero-header-h1");
const heroHeaderP = document.getElementById("hero-header-p");
const heroHeaderButton = document.getElementById("hero-header-button");
const sectionHeaders = document.querySelectorAll(".section-header");

const aboutStudioMainText = document.getElementById("about-studio-main-text");
const aboutStudioMoreTextLg = document.getElementById(
  "about-studio-more-text-lg"
);
const ourServicesElements = [
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

const filters = document.querySelectorAll("#filter");
const more = document.querySelectorAll(".more");

const pricingType = document.querySelectorAll(".pricing-type");
const perMonth = document.querySelectorAll(".per-month");
const pricingServices = document.querySelectorAll("#pricing-service");
const buyNowButton = document.querySelectorAll(".buy-now-button");

const names = document.querySelectorAll(".name");
const positions = document.querySelectorAll(".position");

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
    aboutStudioMainText:
      "Interiart is an award-winning architecture and interior design practice based in NYC. We work internationally on projects of residential & commercial interior design that require a creative approach. Our talented and experienced designers leverage their knowledge and expertise to create unique and comfortable interiors for you.",
    aboutStudioMoreTextLg:
      "<br>Our team knows that interior design can be stressful for the client and we do our best to make it as easy as possible. We listen to your needs, ideas, and inputs. And most importantly, we make it exciting and enjoyable for our clients.",
    ourServicesElements: [
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
    filters: ["ALL", "COMMERCIAL", "RESIDENTIAL", "OFFICE", "OTHER"],
    more: "VIEW MORE",
    pricingType: ["Basic", "Standart", "Premium"],
    perMonth: "per month",
    pricingServices: [
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
    ],
    buyNow: "BUY NOW",
    names: [
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
    ],
    positions: [
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
    aboutStudioMainText:
      "Interiart – це нагороджена практика архітектури та дизайну інтер’єрів, що базується в Нью-Йорку. Ми працюємо над міжнародними проектами дизайну житлових та комерційних інтер'єрів, які потребують творчого підходу. Наші талановиті та досвідчені дизайнери використовують свої знання та досвід, щоб створити унікальні та комфортні інтер’єри для вас.",
    aboutStudioMoreTextLg:
      "<br>Наша команда знає, що дизайн інтер'єру може бути стрессово для клієнта, і ми докладаємо всіх зусиль, щоб зробити його максимально легким. Ми прислухаємося до ваших потреб, ідей та побажань. А головне, ми робимо це захоплюючим і приємним для наших клієнтів.",
    ourServicesElements: [
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
    filters: ["ВСІ", "КОМЕРЦІЙНІ", "ЖИТЛОВІ", "ОФІСНІ", "ІНШІ"],
    more: "БІЛЬШЕ",
    pricingType: ["Базовий", "Стандарт", "Преміум"],
    perMonth: "на місяць",
    pricingServices: [
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
    ],
    buyNow: "ПРИДБАТИ",
    names: [
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
    ],
    positions: [
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

    aboutStudioMainText.textContent = language.ua.aboutStudioMainText;
    aboutStudioMoreTextLg.innerHTML = language.ua.aboutStudioMoreTextLg;

    for (let i = 0; i < sectionHeaders.length; i++) {
      sectionHeaders[i].innerHTML = language.ua.sectionHeaders[i];
      sectionHeaders[i].classList.add("section-header-ua");
    }

    for (let i = 0; i < ourServicesElements.length; i++) {
      ourServicesElements[i].textContent = language.ua.ourServicesElements[i];
    }

    for (let i = 0; i < filters.length; i++) {
      filters[i].textContent = language.ua.filters[i];
    }

    for (let i = 0; i < more.length; i++) {
      more[i].textContent = language.ua.more;
    }

    for (let i = 0; i < pricingType.length; i++) {
      pricingType[i].textContent = language.ua.pricingType[i];
      perMonth[i].textContent = language.ua.perMonth;
      buyNowButton[i].textContent = language.ua.buyNow;
    }

    for (let i = 0; i < pricingServices.length; i++) {
      pricingServices[i].textContent = language.ua.pricingServices[i];
    }

    for (let i = 0; i < positions.length; i++) {
      names[i].textContent = language.ua.names[i]
      positions[i].textContent = language.ua.positions[i]
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

    aboutStudioMainText.textContent = language.en.aboutStudioMainText;
    aboutStudioMoreTextLg.innerHTML = language.en.aboutStudioMoreTextLg;

    for (let i = 0; i < sectionHeaders.length; i++) {
      sectionHeaders[i].innerHTML = language.en.sectionHeaders[i];
      sectionHeaders[i].classList.remove("section-header-ua");
    }

    for (let i = 0; i < ourServicesElements.length; i++) {
      ourServicesElements[i].textContent = language.en.ourServicesElements[i];
    }

    for (let i = 0; i < filters.length; i++) {
      filters[i].textContent = language.en.filters[i];
    }

    for (let i = 0; i < more.length; i++) {
      if (more[i] === more[0]) {
        more[0].textContent = "READ MORE";
      } else {
        more[i].textContent = language.en.more;
      }
    }

    for (let i = 0; i < pricingType.length; i++) {
      pricingType[i].textContent = language.en.pricingType[i];
      perMonth[i].textContent = language.en.perMonth;
      buyNowButton[i].textContent = language.en.buyNow;
    }

    for (let i = 0; i < pricingServices.length; i++) {
      pricingServices[i].textContent = language.en.pricingServices[i];
    }

    for (let i = 0; i < positions.length; i++) {
      names[i].textContent = language.en.names[i]
      positions[i].textContent = language.en.positions[i]
    }
  }
}
