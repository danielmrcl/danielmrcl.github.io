import './Profile.css';
import { useTranslation } from 'react-i18next';

export default function Profile() {
	const { t } = useTranslation();
	const publicUrl = process.env.PUBLIC_URL;

	return (
		<div className="profile">
			<div className="profile-image">
				<img src={`${publicUrl}/avatar.svg`} alt="Cartoon avatar" />
			</div>
			<div className="profile-details">
				<span><b>Daniel Jr</b> | <span>{t('role')}</span></span>
				<p>{t('technologies')}</p>
				<p>{t('principles')}</p>
				<div className="links">
					<a href="mailto:dan@danielmrcl.dev" target="_blank" rel="noreferrer">
						<div className="social-icons" style={{
							backgroundImage: `url(${publicUrl}/email.svg)`
						}}/>
					</a>
					<a href="https://github.com/danielmrcl" target="_blank" rel="noreferrer">
						<div className="social-icons" style={{
							backgroundImage: `url(${publicUrl}/github.svg)`
						}}/>
					</a>
					<a href="https://www.linkedin.com/in/danielmrcl" target="_blank" rel="noreferrer">
						<div className="social-icons" style={{
							backgroundImage: `url(${publicUrl}/linkedin.svg)`
						}}/>
					</a>
				</div>
			</div>
			<hr width="100%" />
		</div>
	);
}
