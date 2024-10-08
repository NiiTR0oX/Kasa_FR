import './error.scss'
import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div className='error'>
			<div className="error_infos">
				<h1 className='error_infos_title'>404</h1>
				<p className='error_infos_content'>Oups! La page que vous demandez n'existe pas.</p>
			</div>
				<Link to="/" className='error_infos_return'>Retourner sur la page d'accueil</Link>
		</div>
	)
}