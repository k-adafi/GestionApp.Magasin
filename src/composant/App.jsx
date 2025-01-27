import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Banner from './Banner'
// import logo from '../assets/rimberio.png'
import Carte from './Carte'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import MesProduits from './MesProduits'

function App() {

	const [carte, updateCarte] = useState([]);

	return (
		<Routes>
			<Route path='/' element = {
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
					<Banner>
						<h1 className='lmj-title'></h1>
					</Banner>
					<div className='lmj-layout-inner'>
						<Carte carte={carte} updateCarte={updateCarte} />
						<MesProduits/>
					</div>
					<Footer />
				</div>
			}/>
		</Routes>
		
	)

}

export default App


