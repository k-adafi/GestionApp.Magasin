/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom';
import '../styles/carte.css'

function CarteProd (){

    //const monsteraPrice = 8;
	// const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true);
    

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
            <p>--------------------------</p>

            <Link className='lmg-btn-gerer' to="/">Acceuil</Link>  
            
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le menu
			</button>
		</div>
	)


}

export default CarteProd