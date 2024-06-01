function changeLanguage(lang) {
	localStorage.setItem('language', lang);
	updateTextContent(langData);
}

// Update text content.
function updateTextContent(langData) {
	const lang = localStorage.getItem('language') || 'en';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key][lang];
    });
}

// First load.
window.addEventListener('DOMContentLoaded', async () => {
	updateTextContent(langData);
});

// Language-based text content
const langData = {
	title: {
		en: "About Me",
		pt: "Sobre Mim",
	},
	role: {
		en: "Backend Developer",
		pt: "Desenvolvedor Backend",
	},
	technologies: {
		en: "Since 2021, I've been developing Java 8+ applications using Spring and PostgreSQL in a microservices architecture for critical, efficient and scalable systems.",
		pt: "Desde 2021 desenvolvo aplicações Java 8+ utilizando Spring e PostgreSQL em uma arquitetura de microsserviços para sistemas críticos, eficientes e escaláveis.",
	},
	principles: {
		en: "With a focus on code quality, architecture and scalability, I have strong foundation of programming, design and architecture. I am passionate about programming and constantly learn new technologies and paradigms.",
		pt: "Com foco em qualidade de código, arquitetura e escalabilidade, possuo sólida base de programação, design e arquitetura. Sou apaixonado por programação e aprendo constantemente novas tecnologias e paradigmas.",
	},
}

