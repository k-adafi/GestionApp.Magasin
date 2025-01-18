import CareScale from './CareScale'
import '../styles/produiItem.css'



// eslint-disable-next-line react/prop-types
function ProduiItem({id, name, cover, light, water}) {

    function handleClick(produitName) {

        alert(`Vous vouler acheter 1 ${produitName} ? très bon choix`)
    
    }

    return(
        /*<li key={id} className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li> */

        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>

    );
}

export default ProduiItem