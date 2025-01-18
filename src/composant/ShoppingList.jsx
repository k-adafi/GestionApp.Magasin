import { produits } from '../datas/produits.jsx'
import '../styles/shoppingList.css'
import ProduiItem from './ProduiItem.jsx'

function ShoppingList() {


    const categories = produits.reduce(
        (acc, prd) => 
            acc.includes(prd.category) ? acc : acc.concat(prd.category),
        []
    )

    return (
        <div>

            {/* <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmg-produit-list'>
				{produits.map((plant) => (
					<li key={plant.id} className='lmg-produit-item'>
						{plant.name}
						{plant.isSpecialOffer && <div className='lmg-sales '>Soldes</div>}
					</li>
				))}
			</ul> */}


            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))} 
            </ul>

            {/* <h1>Nos produits😊</h1> */}
            <ul className='lmg-produit-list'>
                {produits.map(({id, cover, name, water, light}) => (

                    <ProduiItem
                        key={id} // Key ajouté ici pour éviter les avertissements React
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />

                    // <li key={prod.id} className='lmg-produit-item'>
                    //     {prod.name}
                    //     {prod.isSpecialPromo && <div className='lmg-sales'>Soldes</div>}
                        
                    // </li> 
                ))}
            </ul>
        </div>
       

       
    )

}

export default ShoppingList

