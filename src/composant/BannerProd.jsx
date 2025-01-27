import '../styles/banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function BannerProd() {
	return (
		<div className="container-fluide">
			<div className="titre-banner">
				{/* Titre principal */}
				<h2 className="titre-titre">
					<span className="titre-my">My</span>
					<span className="titre-market">-market</span>
				</h2>

				{/* Sous-titre */}
				<h1 className="titre-tonga">Gestion des produits</h1>
			</div>
		</div>
	);
}

export default BannerProd;
