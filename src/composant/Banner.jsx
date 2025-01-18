import '../styles/banner.css'
import logo from '../assets/rimberio.png'

function Banner () {
    const titre = "Magazeko";

    return (
        <div className='titre-banner'>
            <img src={logo} alt="logo-magasin" className='titre-logo' />
            <h1 className='titre-titre'>{titre}</h1>
        </div>
    )
}

export default Banner

