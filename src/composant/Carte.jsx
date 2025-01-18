import { useState } from 'react' 
import '../styles/carte.css'

function Carte (){

    const monsteraPrice = 8
	const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>Monstera : {monsteraPrice} Ar</div>
            
			<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
            <button onClick={() => updateCart(0)}>Vider le panier</button>
			<h3>Total : {monsteraPrice * cart} Ar</h3>
            
            
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)


    // const [cart, updateCart] = useState(0);
    // const [isOpen, setIsOpen] = useState(false)


    // const monsteraPrice = 8
    // // const ivyPrice = 10
    // // const flowerPrice = 15
    // return (
    //     <div className="lmj-cart">
    //         <h2>Panier</h2>
    //         <div>
    //              Monstera : {monsteraPrice}€
    //             <button onClick={() => updateCart(cart + 1)}>
    //                     Ajouter
    //             </button>
    //         </div>
    //         <h3>Total : {monsteraPrice * cart}€</h3>
            

    //         {/* <ul>
    //             <li>Monstera : {monsteraPrice}€</li>
    //             <li>Lierre : {ivyPrice}€</li>
    //             <li>Fleurs : {flowerPrice}€</li>
    //         </ul>
    //         <h4>Total : {monsteraPrice + ivyPrice + flowerPrice }€</h4> */}
    //     </div>
    // )

}

export default Carte