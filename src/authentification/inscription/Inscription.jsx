import { useState } from 'react';
import { Link } from 'react-router-dom';
import './inscription.css';

function Inscription() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Vérification de la validité du mot de passe
  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Réinitialiser les erreurs
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
    if (!formData.email.includes('@')) newErrors.email = "Email invalide.";
    if (!validatePassword(formData.password)) {
      newErrors.password = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulation d'un appel API
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Inscription réussie :", formData);
      setSubmitted(true);
      setErrors({});
    } catch (error) {
      setErrors({ api: "Une erreur est survenue. Veuillez réessayer plus tard." });
    } finally {
      setLoading(false);
    }
  };

  // Gestion de la connexion avec Google
  const handleGoogleSignup = () => console.log("➡️ Continuer avec Google (à connecter à OAuth)");

  return (
    <div className="signup-container">
      <h2 className="highlight">Inscription</h2>

      {submitted ? (
        <div className="success-message">✅ Inscription réussie ! Bienvenue 😊</div>
      ) : (
        <>
          {errors.api && <p className="error-message">{errors.api}</p>}
          
          <form className="signup-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nom complet" value={formData.name} onChange={handleChange} required />
            {errors.name && <p className="error-message">{errors.name}</p>}

            <input type="email" name="email" placeholder="Adresse email" value={formData.email} onChange={handleChange} required />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} required />
            {errors.password && <p className="error-message">{errors.password}</p>}

            <button type="submit" disabled={loading}>{loading ? "Chargement..." : "S'inscrire"}</button>
          </form>

          <div className="redirect-login">
            <p>Vous avez déjà un compte ? <Link to="/login">Se connecter</Link></p>
          </div>

          <div className="social-login">
            <p>Ou continuer avec</p>
            <button className="google-btn" onClick={handleGoogleSignup} aria-label="S'inscrire avec Google">Continuer avec Google</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Inscription;
