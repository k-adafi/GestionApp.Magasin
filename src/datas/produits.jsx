import boisson from '../assets/images/boisson.jpeg';
import biscuit from '../assets/images/biscuit.jpg';
import litchi from '../assets/images/litchi.jpeg';
import bannane from '../assets/images/bannane.jpeg';
import mangue from '../assets/images/mangue.jpg';
import pomme_terre from '../assets/images/pomme-de-terre.jpeg';
import livre_info from '../assets/images/livre-info.png';
import livre_math from '../assets/images/livre-math.png';

export const produits = [
	{
        id: '1',
		name: 'Caprice 200ml',
		category: 'STAR',
        price: '400',
        isBestVente: true,
        isSpecialPromo: true,
        light: 2,
		water: 3,
        cover: boisson,
        stock: 33
	},
	{
        id: '2',
		name: 'Gouty',
		category: 'Biscuit',
        price: '1600',
        isBestVente: false,
        isSpecialPromo: true,
        light: 2,
		water: 3,
        cover: biscuit,
        stock: 12
	},
	{
        id: '4',
		name: 'Informatique',
		category: 'Livre',
        price: '1200',
        isBestVente: true,
        isSpecialPromo: true,
        light: 2,
		water: 3,
        cover: livre_info,
        stock: 67
	},
	{
        id: '5',
		name: 'Mathématiques',
		category: 'Livre',
        price: '1000',
        isBestVente: false,
        isSpecialPromo: false,
        light: 2,
		water: 3,
        cover: livre_math,
        stock: 34
	},
	{
        id: '6',
		name: 'Bannane',
		category: 'Fruit',
        price: '125',
        isBestVente: true,
        isSpecialPromo: false,
        light: 2,
		water: 3,
        cover: bannane,
        stock: 90
	},
	{
        id: '7',
		name: 'Mangues',
		category: 'Fruit',
        price: '2000',
        isBestVente: false,
        isSpecialPromo: false,
        light: 2,
		water: 3,
        cover: mangue,
        stock: 89
	},
	{
        id: '8',
		name: 'Litchi',
		category: 'Fruit',
        price: '100',
        isBestVente: true,
        isSpecialPromo: false,
        light: 2,
		water: 3,
        cover: litchi,
        stock: 55
	},
	{
        id: '9',
		name: 'Pomme de terre',
		category: 'Legûmes',
        price: '120',
        isBestVente: false,
        isSpecialPromo: false,
        light: 2,
		water: 3,
        cover: pomme_terre,
        stock: 79
	}
]