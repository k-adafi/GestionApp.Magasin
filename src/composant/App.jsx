import Banner from './Banner'
import logo from '../assets/rimberio.png'
import Carte from './Carte'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Carte />
				<ShoppingList />
			</div>
			<Footer />
		</div>
	)

}

export default App


