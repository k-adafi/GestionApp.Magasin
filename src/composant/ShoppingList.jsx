/* eslint-disable react/prop-types */
import { useState } from 'react'
import { produits } from '../datas/produits.jsx'
import '../styles/shoppingList.css'
import ProduiItem from './ProduiItem.jsx'
import Categories from './Categories.jsx'


function ShoppingList({carte, updateCarte}) {

    const [activeCategory, setActiveCategory] = useState('')

    const categories = produits.reduce(
        (acc, prd) => 
            acc.includes(prd.category) ? acc : acc.concat(prd.category),
        []
    )

    function addToCart(name, price) {
		const currentPlantSaved = carte.find((prd) => prd.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = carte.filter(
				(prd) => prd.name !== name
			)
			updateCarte([
				...cartFilteredCurrentPlant,
				{ name, price, qte: currentPlantSaved.qte + 1 }
			])
		} else {
			updateCarte([...carte, { name, price, qte: 1 }])
		}
	}

    return (
        <div>

            <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

            {/* <h1>Nos produits😊</h1> */}
            <ul className='lmg-produit-list'>
                {produits.map(({id, cover, name, water, light, price, category }) => 
                    !activeCategory || activeCategory === category ? (

                        <div key={id}>
                            <ProduiItem 
                                id={id} 
                                cover={cover} 
                                name={name} 
                                water={water} 
                                light={light} 
                                price={price} 
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ): null   

                )}
            </ul>
        </div>
       

       
    )

}

export default ShoppingList

