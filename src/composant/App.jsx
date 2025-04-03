import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Banner from './Banner'
// import logo from '../assets/rimberio.png'
import Carte from './Carte'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import MesProduits from './MesProduits'
import CarteProd from './CarteProd'
import BannerProd from './BannerProd'
import Inscription from '../authentification/inscription/Inscription'
import Connexion from '../authentification/connexion/Connexion'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenue from './Bienvenu'
import Bonjour from './Bonjour'

function App() {

	const [carte, updateCarte] = useState([]);

	return (
		<Routes>
			<Route path='/' element = {
				<div className='row'>
					<div className="col">
						<Bienvenue />
					</div>
					<div className="col">
						<Inscription />
					</div>
				</div>
			}/>
			<Route path='/login' element = {
				<div className='row'>
					<div className="col">
						<Bonjour />
					</div>
					<div className="col">
						<Connexion />
					</div>
				</div>
			}/>
			<Route path='/produit' element = {
				<div>
					<Banner>
						<h1 className='lmj-title'></h1>
					</Banner>
					<div className='lmj-layout-inner'>
						<Carte carte={carte} updateCarte={updateCarte} />
						<ShoppingList carte={carte} updateCarte={updateCarte} />
					</div>
					<Footer />
				</div>
			}/>
			<Route path='/gestion-produit' element = {
				<div>
					<BannerProd>
						<h1 className='lmj-title'></h1>
					</BannerProd>
					<div className='lmj-layout-inner'>
						<CarteProd/>
						<MesProduits/>
					</div>
					<Footer />
				</div>
			}/>
		</Routes>
		
	)

}

export default App


