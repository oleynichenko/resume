import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      about: {
        title: "About Me",
        position: "Front-end developer",
        description: [
          "Mathematician by education. Until 2003 worked at the Institute of Mathematics of the National Academy of Sciences. Over the next 10 years went from a sales manager to the head of a distribution company (FMCG).",
          "In 2013 moved to internet marketing. Participated in the promotion of several educational projects. Since 2016 I`ve been doing what I really like — web development and UX design.",
        ],
        info: {
          position: "Desired position",
          languages: "Languages",
          residence: "Residence",
          nationality: "Nationality",
        },
      },
      contacts: {
        title: "Contacts",
        phone: "Phone",
        email: "Email",
        portfolio: "Portfolio",
      },
      education: {
        title: "Education",
      },
      experience: {
        title: "Experience",
      },
      skills: {
        title: "Skills",
        goodKnowledge: "Good knowledges",
      },
    },
  },
  ru: {
    translation: {
      about: {
        title: "О себе",
        position: "Front-end разработчик",
        description: [
          "По образованию математик. До 2003 года работал в Институте математики НАН Украины. В течение следующих 10 лет прошел путь от менеджера по продажам до руководителя дистрибьюторской компании (FMCG).",
          "В 2013 году перешел в интернет-маркетинг. Участвовал в продвижении нескольких образовательных проектов. С 2016 года занимаюсь тем, что действительно нравится — веб-разработкой и UX-дизайном.",
        ],
        info: {
          position: "Желаемая должность",
          languages: "Языки",
          residence: "Место жительства",
          nationality: "Национальность",
        },
      },
      contacts: {
        title: "Контакты",
        phone: "Телефон",
        email: "Email",
        portfolio: "Портфолио",
      },
      education: {
        title: "Образование",
      },
      experience: {
        title: "Опыт работы",
      },
      skills: {
        title: "Навыки",
        goodKnowledge: "Хорошие знания",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
