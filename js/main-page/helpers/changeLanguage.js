const selectENLanguage = document.getElementById("en-language");
const selectUALanguage = document.getElementById("ua-language");
let allElementsArray = [
  document.querySelectorAll(".header-link"),
  document.getElementById("hero-header-h1"),
  document.getElementById("hero-header-p"),
  document.getElementById("hero-header-button"),
  document.querySelectorAll(".section-header"),
  document.getElementById("about-studio-main-text"),
  document.getElementById("about-studio-more-text-lg"),
  document.getElementById("about-studio-more-text-xs"),
  document.getElementById("interior-design-card-header"),
  document.getElementById("interior-design-card-description"),
  document.getElementById("decorative-services-card-header"),
  document.getElementById("decorative-services-card-description"),
  document.getElementById("space-planning-card-header"),
  document.getElementById("space-planning-card-description"),
  document.getElementById("project-management-card-header"),
  document.getElementById("project-management-card-description"),
  document.getElementById("consultation-button"),
  document.querySelectorAll("#filter"),
  document.querySelectorAll(".more"),
  document.querySelectorAll(".pricing-type"),
  document.querySelectorAll(".per-month"),
  document.querySelectorAll("#pricing-service"),
  document.querySelectorAll(".buy-now-button"),
  document.querySelectorAll(".name"),
  document.querySelectorAll(".position"),
  document.getElementById("order-a-call-button"),
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
  en: [
    "Services",
    "Portfolio",
    "Pricing",
    "We create your space better",
    "Our team creates comfortable spaces for our clients. We've been designing your everyday life and work through great ideas since 1999.",
    "GET STARTED",
    "About <span>Studio</span>",
    "Our <span>Services</span>",
    "Our <span>Portfolio</span>",
    "Our <span>Pricing</span>",
    "What <span>People Say</span>",
    "Do you have <br><span>any question?</span>",
    "Interiart is an award-winning architecture and interior design practice based in NYC. We work internationally on projects of residential & commercial interior design that require a creative approach. Our talented and experienced designers leverage their knowledge and expertise to create unique and comfortable interiors for you.",
    "<br>Our team knows that interior design can be stressful for the client and we do our best to make it as easy as possible. We listen to your needs, ideas, and inputs. And most importantly, we make it exciting and enjoyable for our clients.",
    "Our team knows that interior design can be stressful for the client and we do our best to make it as easy as possible. We listen to your needs, ideas, and inputs. And most importantly, we make it exciting and enjoyable for our clients.",
    "INTERIOR DESIGN",
    "Interior design services offer a vast variety of solutions for our clients' homes and offices.",
    "DECORATIVE SERVICES",
    "Our professional decorators will be happy to help you change your house's inner look.",
    "SPACE PLANNING",
    "We create better interior experiences through our space planning services.",
    "PROJECT MANAGEMENT",
    "We provide proper project management as it's one of the main success factors in interior design.",
    "FREE CONSULTATION",
    "ALL",
    "COMMERCIAL",
    "RESIDENTIAL",
    "OFFICE",
    "OTHER",
    "READ MORE",
    "VIEW MORE",
    "VIEW MORE",
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
    "ORDER A CALL",
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
  ua: [
    "Послуги",
    "Портфоліо",
    "Ціни",
    "Ми робимо ваш простір кращим",
    "Наша команда створює комфортний простір для наших клієнтів. З 1999 року ми створюємо ваше повсякденне життя та працюємо над чудовими ідеями.",
    "РОЗПОЧАТИ",
    "Про <span>Студію</span>",
    "Наші <span>Послуги</span>",
    "Наше <span>Портфоліо</span>",
    "Наші <span>Ціни</span>",
    "Що <span>Кажуть Люди</span>",
    "Маєте <br><span>Запитання?</span>",
    "Interiart – це нагороджена практика архітектури та дизайну інтер’єрів, що базується в Нью-Йорку. Ми працюємо над міжнародними проектами дизайну житлових та комерційних інтер'єрів, які потребують творчого підходу. Наші талановиті та досвідчені дизайнери використовують свої знання та досвід, щоб створити унікальні та комфортні інтер’єри для вас.",
    "<br>Наша команда знає, що дизайн інтер'єру може бути стрессовим для клієнта, і ми докладаємо всіх зусиль, щоб зробити його максимально легким. Ми прислухаємося до ваших потреб, ідей та побажань. А головне, ми робимо це захоплюючим і приємним для наших клієнтів.",
    "Наша команда знає, що дизайн інтер'єру може бути стрессовим для клієнта, і ми докладаємо всіх зусиль, щоб зробити його максимально легким. Ми прислухаємося до ваших потреб, ідей та побажань. А головне, ми робимо це захоплюючим і приємним для наших клієнтів.",
    "ДИЗАЙН ІНТЕР'ЄРУ",
    "Послуги з дизайну інтер’єру пропонують широкий вибір рішень для дому та офісу наших клієнтів.",
    "ДЕКОРАТИВНІ ПОСЛУГИ",
    "Наші професійні декоратори з радістю допоможуть вам змінити внутрішній вигляд вашого будинку.",
    "ПЛАНУВАННЯ ПРОСТОРУ",
    "Ми створюємо кращий інтер’єр за допомогою наших послуг з планування простору.",
    "УПРАВЛІННЯ ПРОЕКТАМИ",
    "Ми забезпечуємо належне управління проектами, оскільки це один із головних факторів успіху в дизайні інтер’єру.",
    "БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ",
    "ВСІ",
    "КОМЕРЦІЙНІ",
    "ЖИТЛОВІ",
    "ОФІСНІ",
    "ІНШІ",
    "БІЛЬШЕ",
    "БІЛЬШЕ",
    "БІЛЬШЕ",
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
    "ЗАМОВИТИ ДЗВІНОК",
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
};
// Check if a hash value exists in the URL
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash === "#ua") {
    selectENLanguage.children[0].textContent = "UA";
    selectUALanguage.children[0].textContent = "EN";

    for (let i = 0; i < allElementsArray.length; i++) {
      if (allElementsArray[i].length > 1) {
        allElementsArray[i] = Array.from(allElementsArray[i]);
      }
    }
    allElementsArray = allElementsArray.flat();

    for (let i = 0; i < allElementsArray.length; i++) {
      allElementsArray[i].innerHTML = language.ua[i];
      if (allElementsArray[i].classList.contains("section-header")) {
        allElementsArray[i].classList.add("section-header-ua");
      }
    }
  } else {
    selectENLanguage.children[0].textContent = "EN";
    selectUALanguage.children[0].textContent = "UA";

    for (let i = 0; i < allElementsArray.length; i++) {
      if (allElementsArray[i].length > 1) {
        allElementsArray[i] = Array.from(allElementsArray[i]);
      }
    }
    allElementsArray = allElementsArray.flat();

    for (let i = 0; i < allElementsArray.length; i++) {
      allElementsArray[i].innerHTML = language.en[i];
      if (allElementsArray[i].classList.contains("section-header")) {
        allElementsArray[i].classList.remove("section-header-ua");
      }
    }
  }
}
