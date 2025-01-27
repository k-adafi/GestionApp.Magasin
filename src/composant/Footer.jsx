import { useState } from 'react'
import '../styles/footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Envoye-nous vos messages 😁!
			</div>
			<input
				placeholder='Votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
				className='lmg-footer-input'
			/>
			<textarea className='lmg-footer-text' name="commentaire" placeholder='Entrez vos commentaire' id=""></textarea>
            <button className='lmg-btn-envoyer' onClick={handleInput}>Envoyer</button>

            <div>
                <h5>© 2025 by KADAFI Ben</h5>
            </div>

		</footer>
	)
}

export default Footer