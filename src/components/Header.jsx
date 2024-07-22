import './Header.css';
import { t, changeLanguage } from 'i18next';

function handleChangeLanguage(lang) {
	changeLanguage(lang);
	document.title = t('title');
}

export default function Header() {
	return (
		<header>
			<div className="language-selector">
				<button onClick={() => handleChangeLanguage('en')}>🇺🇸</button>
				<button onClick={() => handleChangeLanguage('pt')}>🇧🇷</button>
			</div>
		</header>
	);
}
