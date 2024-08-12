import './Error.scss'
import Header from "../../components/header/Header";
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className='error'>
			<Header />
			<div className="error_infos">
				<h1 className='error_infos_title'>404</h1>
				<p className='error_infos_content'>Oups! La page que vous demandez n'existe pas.</p>
			</div>
				<Link className='error_infos_return'>Retourner sur la page d'accueil</Link>
		</div>
	)
}