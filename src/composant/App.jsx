import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/rimberio.png'
import Carte from './Carte'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {

	const [carte, updateCarte] = useState([]);

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'></h1>
			</Banner>
			<div className='lmj-layout-inner'>
				{/* <Carte />
				<ShoppingList /> */}
				<Carte carte={carte} updateCarte={updateCarte} />
				<ShoppingList carte={carte} updateCarte={updateCarte} />
			</div>
			<Footer />
		</div>
	)

}

export default App


