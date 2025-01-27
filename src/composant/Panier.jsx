

/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom';
import '../styles/carte.css'

function Panier ({carte, updateCarte}){

    //const monsteraPrice = 8;
	// const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true);

    const total = carte.reduce(
        (acc, produitype) => acc + produitype.qte * produitype.price, 
        0
    )
    //acc : accimulateur de reduce
    
    useEffect(() => {

        document.title = `MGS: ${total} Ar d'achats`
    
    }, [total])
    

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
            <p>---------------------------</p>

            <Link className='lmg-btn-gerer' to="/">Acceuil</Link>

           
			<h2>Panier</h2>
			{/* <div>Monstera : {monsteraPrice} Ar</div> */}
            {carte.map(({name, price, qte }, index) => (
                <div key={`${name}-${index}`}>
                    {name} {price} Ar x {qte}
                </div>
            ))}

            <h3>Totale : {total} Ar</h3>
            
            <button className='lmg-btn-vider' onClick={() => updateCarte([])}>Vider le panier</button>

            <p>---------------------------</p>

            <Link className='lmg-btn-gerer' to="/gestion-produit">Gérer mes produits</Link>          
            
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

export default Panier