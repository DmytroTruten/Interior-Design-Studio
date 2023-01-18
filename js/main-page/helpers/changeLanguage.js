const selectUALanguage = document.getElementById("ua-language");
const selectENLanguage = document.getElementById("en-language");
const headerLink = document.querySelectorAll(".header-link");
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

export function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

const language = {
  en: {
    services: "Services",
    portfolio: "Portfolio",
    pricing: "Pricing",
    heroHeaderH1: "We create your space better",
    heroHeaderP:
      "Our team creates comfortable spaces for our clients. We've been designing your everyday life and work through great ideas since 1999.",
    heroHeaderButton: "GET STARTED",
    sectionHeaders: {
      aboutStudioSectionHeader: "About <span>Studio</span>",
      ourServicesSectionHeader: "Our <span>Services</span>",
      ourPortfolioSectionHeader: "Our <span>Portfolio</span>",
      ourPricingSectionHeader: "Our <span>Pricing</span>",
      testimonialsSectionHeader: "What <span>People Say</span>",
      questionSectionHeader: "Do you have <br><span>any question?</span>",
    },
    aboutStudioMainText:
      "Interiart is an award-winning architecture and interior design practice based in NYC. We work internationally on projects of residential & commercial interior design that require a creative approach. Our talented and experienced designers leverage their knowledge and expertise to create unique and comfortable interiors for you.",
    aboutStudioMoreTextLg:
      "<br>Our team knows that interior design can be stressful for the client and we do our best to make it as easy as possible. We listen to your needs, ideas, and inputs. And most importantly, we make it exciting and enjoyable for our clients.",
    ourServicesElements: {
      interiorDesignCardHeader: "INTERIOR DESIGN",
      interiorDesignCardDescription:
        "Interior design services offer a vast variety of solutions for our clients' homes and offices.",
      decorativeServicesCardHeader: "DECORATIVE SERVICES",
      decorativeServicesCardDescription:
        "Our professional decorators will be happy to help you change your house's inner look.",
      spacePlanningCardHeader: "SPACE PLANNING",
      spacePlanningCardDescription:
        "We create better interior experiences through our space planning services.",
      projectManagementCardHeader: "PROJECT MANAGEMENT",
      projectManagementCardDescription:
        "We provide proper project management as it's one of the main success factors in interior design.",
      consultationButton: "FREE CONSULTATION",
    },
  },
  ua: {
    services: "Послуги",
    portfolio: "Портфоліо",
    pricing: "Ціни",
    heroHeaderH1: "Ми робимо ваш простір кращим",
    heroHeaderP:
      "Наша команда створює комфортний простір для наших клієнтів. З 1999 року ми створюємо ваше повсякденне життя та працюємо над чудовими ідеями.",
    heroHeaderButton: "РОЗПОЧАТИ",
    sectionHeaders: {
      aboutStudioSectionHeader: "Про <span>Студію</span>",
      ourServicesSectionHeader: "Наші <span>Послуги</span>",
      ourPortfolioSectionHeader: "Наше <span>Портфоліо</span>",
      ourPricingSectionHeader: "Наші <span>Ціни</span>",
      testimonialsSectionHeader: "Що <span>Кажуть Люди</span>",
      questionSectionHeader: "Маєте <br><span>Запитання?</span>",
    },
    aboutStudioMainText:
      "Interiart – це нагороджена практика архітектури та дизайну інтер’єрів, що базується в Нью-Йорку. Ми працюємо над міжнародними проектами дизайну житлових та комерційних інтер'єрів, які потребують творчого підходу. Наші талановиті та досвідчені дизайнери використовують свої знання та досвід, щоб створити унікальні та комфортні інтер’єри для вас.",
    aboutStudioMoreTextLg:
      "<br>Наша команда знає, що дизайн інтер'єру може бути стрессово для клієнта, і ми докладаємо всіх зусиль, щоб зробити його максимально легким. Ми прислухаємося до ваших потреб, ідей та побажань. А головне, ми робимо це захоплюючим і приємним для наших клієнтів.",
    ourServicesElements: {
      interiorDesignCardHeader: "ДИЗАЙН ІНТЕР'ЄРУ",
      interiorDesignCardDescription:
        "Послуги з дизайну інтер’єру пропонують широкий вибір рішень для дому та офісу наших клієнтів.",
      decorativeServicesCardHeader: "ДЕКОРАТИВНІ ПОСЛУГИ",
      decorativeServicesCardDescription:
        "Наші професійні декоратори з радістю допоможуть вам змінити внутрішній вигляд вашого будинку.",
      spacePlanningCardHeader: "ПЛАНУВАННЯ ПРОСТОРУ",
      spacePlanningCardDescription:
        "Ми створюємо кращий інтер’єр за допомогою наших послуг з планування простору.",
      projectManagementCardHeader: "УПРАВЛІННЯ ПРОЕКТАМИ",
      projectManagementCardDescription:
        "Ми забезпечуємо належне управління проектами, оскільки це один із головних факторів успіху в дизайні інтер’єру.",
      consultationButton: "БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ",
    },
  },
};

// Check if a hash value exists in the URL
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash === "#ua") {
    for (let i = 0; i < headerLink.length; i++) {
      headerLink[i].textContent = Object.values(language.ua)[i];
    }
    selectENLanguage.children[0].textContent = "UA";
    selectUALanguage.children[0].textContent = "EN";

    heroHeaderH1.textContent = language.ua.heroHeaderH1;
    heroHeaderP.textContent = language.ua.heroHeaderP;
    heroHeaderButton.textContent = language.ua.heroHeaderButton;

    aboutStudioMainText.textContent = language.ua.aboutStudioMainText;
    aboutStudioMoreTextLg.innerHTML = language.ua.aboutStudioMoreTextLg;

    for (let i = 0; i < sectionHeaders.length; i++) {
      sectionHeaders[i].innerHTML = Object.values(language.ua.sectionHeaders)[i]
      sectionHeaders[i].classList.add('section-header-ua')
    }

    for (let i = 0; i < ourServicesElements.length; i++) {
      ourServicesElements[i].textContent = Object.values(
        language.ua.ourServicesElements
      )[i];
    }
  } else {
    for (let i = 0; i < headerLink.length; i++) {
      headerLink[i].textContent = Object.values(language.en)[i];
    }
    selectENLanguage.children[0].textContent = "EN";
    selectUALanguage.children[0].textContent = "UA";

    heroHeaderH1.textContent = language.en.heroHeaderH1;
    heroHeaderP.textContent = language.en.heroHeaderP;
    heroHeaderButton.textContent = language.en.heroHeaderButton;

    aboutStudioMainText.textContent = language.en.aboutStudioMainText;
    aboutStudioMoreTextLg.innerHTML = language.en.aboutStudioMoreTextLg;

    for (let i = 0; i < sectionHeaders.length; i++) {
      sectionHeaders[i].innerHTML = Object.values(language.en.sectionHeaders)[i]
      sectionHeaders[i].classList.remove('section-header-ua')
    }

    for (let i = 0; i < ourServicesElements.length; i++) {
      ourServicesElements[i].textContent = Object.values(
        language.en.ourServicesElements
      )[i];
    }
  }
}
