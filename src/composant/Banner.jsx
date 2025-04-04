import '../styles/banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
	return (
		<div className="container-fluide">
			<div className="titre-banner">
				{/* Titre principal */}
				<h2 className="titre-titre">
					<span className="titre-my">My</span>
					<span className="titre-market">-market</span>
				</h2>

				{/* Sous-titre */}
				<h1 className="titre-tonga">Bienvenu - Tonga soa</h1>

				{/* Champ de recherche et bouton */}
				<div>
					<input
						type="text"
						className="lmg-input"
						placeholder="Recherche ..."
					/>
					<button className="lmg-btn-reche">Rechercher</button>
				</div>
			</div>
		</div>
	);
}

export default Banner;
