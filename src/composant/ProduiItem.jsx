import CareScale from './CareScale'
import '../styles/produiItem.css'
import { Container, Row, Col } from "reactstrap";



// eslint-disable-next-line react/prop-types
function ProduiItem({id, name, cover, price, light, water, stock}) {

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
            <Row>
                <Col className='col-9'>
                    <strong>{name}</strong>
                </Col>
                <Col className='col-3'>
                    {price}Ar
                </Col>
            </Row>
            <Row>
                <Col className='col-9'>
                    {stock}
                </Col>
            </Row>
            {/* <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div> */}
        </li>

    );
}

export default ProduiItem