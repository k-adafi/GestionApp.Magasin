import { useState } from 'react';
import { Link } from 'react-router-dom';
import './connexion.css';


function Connexion (){
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
      });
    
      const [isLoggedIn, setIsLoggedIn] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Tentative de connexion :", credentials);
        setIsLoggedIn(true);
      };
    
      const handleGoogleLogin = () => {
        console.log("➡️ Connexion avec Google (à connecter à OAuth)");
      };
    
    
      return (
        <div className="login-container">
          <h2 className="highlight">Connexion</h2>
          {isLoggedIn ? (
            <div className="success-message">✅ Connexion réussie ! Bienvenue 🛍️</div>
          ) : (
            <>
              <form className="login-form" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Adresse email" value={credentials.email} 
                    onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <input type="password" name="password" placeholder="Mot de passe" value={credentials.password} onChange={handleChange} required />
                <button type="submit">Se connecter</button>
              </form>

              <div className="redirect-login">
                <p>Vous n'avez pas encore un compte ? <Link to="/">S'inscrire</Link></p>
              </div>
    
              <div className="social-login">
                <p>Ou continuer avec</p>
                <button className="google-btn" onClick={handleGoogleLogin}>Connexion avec Google</button>
              </div>
            </>
          )}
        </div>
    );

}
export default Connexion