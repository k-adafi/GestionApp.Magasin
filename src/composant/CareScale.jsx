import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// eslint-disable-next-line react/prop-types
function CareScale({ scaleValue, careType }) {
    
	const range = [1, 2, 3];
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		);

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					// <span key={rangeElem.toString()}>{scaleType}</span>
                    <span key={`${careType}-${rangeElem}`}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale