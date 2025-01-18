import { useState } from 'react' 
import '../styles/carte.css'

function Menu (){
    
    
    const [isOpen, setIsOpen] = useState(false)
 
    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Menu</h2>
            <div>
                <button>Acceuil</button>
                <button>Nos catégories</button>
                <button>Nos produit</button>
                <button>Mettre en veille</button>
            </div>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
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

export default Menu