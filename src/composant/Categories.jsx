/* eslint-disable react/prop-types */
import '../styles/categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>Catégories (-------)   </option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						Catégorie ({cat})
					</option>
				))}
			</select>
			<button className='lmg-btn-rei' onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories