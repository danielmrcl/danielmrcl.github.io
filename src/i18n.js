import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			"role": "Backend Developer",
			"technologies": "Since 2021, I've been developing Java 8+ applications using Spring and PostgreSQL in a microservices architecture for critical, efficient and scalable systems.",
			"principles": "With a focus on code quality, architecture and scalability, I have strong foundation of programming, design and architecture. I am passionate about programming and constantly learn new technologies and paradigms."
		}
	},
	pt: {
		translation: {
			"role": "Desenvolvedor Backend",
			"technologies": "Desde 2021 desenvolvo aplicações Java 8+ utilizando Spring e PostgreSQL em uma arquitetura de microsserviços para sistemas críticos, eficientes e escaláveis.",
			"principles": "Com foco em qualidade de código, arquitetura e escalabilidade, possuo sólida base de programação, design e arquitetura. Sou apaixonado por programação e aprendo constantemente novas tecnologias e paradigmas."
		}
	}
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "en",
		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;
