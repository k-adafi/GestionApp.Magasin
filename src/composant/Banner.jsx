import '../styles/banner.css'
// import logo from '../assets/rimberio.png'

function Banner () {
    // const titre = "My-market";

    // const navLinks = [

    //     {
    //       display: "Bienvenu",
    //       url: "#",
    //     },
    //     {
    //       display: "Tonga soa",
    //       url: "#",
    //     }
    // ];

    return (
        <div>
            <div className='titre-banner'>
                {/* <img src={logo} alt="logo-magasin" className='titre-logo' /> */}
                <h2 className='titre-titre'><span className='titre-my'>My</span><span className='titre-market'>-market</span></h2>
                <h1 className='titre-tonga'>Bienvenu  -  Tonga soa</h1>
                <input type="text" className='lmg-input' placeholder='Recherche ...' />
                <button className='lmg-btn-reche'>Rechercher</button>
            </div>
        </div>
        
    )
}

export default Banner

