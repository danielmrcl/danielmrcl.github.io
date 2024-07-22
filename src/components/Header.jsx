import './Header.css';
import { changeLanguage } from 'i18next';

export default function Header() {
	return (
		<header>
			<div className="language-selector">
				<button onClick={() => changeLanguage('en')}>🇺🇸</button>
				<button onClick={() => changeLanguage('pt')}>🇧🇷</button>
			</div>
		</header>
	);
}
