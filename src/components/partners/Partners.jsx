
import "./Partners.scss"

import partner1 from "../../imges/partner1.png"
import partner2 from "../../imges/partner2.png"
import partner3 from "../../imges/partner3.png"
import partner4 from '../../imges/partner4.png'

function Partners () {
	return (
		<div className='partners'>
			<div className='leaft'>
				<img src={partner1} alt='partners' />
				<img src={partner2} alt='partners' />
				<img src={partner3} alt='partners' />
				<img src={partner4} alt='partners' />
			</div>
			<div className='right'>
				<h4>Hamkorlarimiz</h4>
			</div>
		</div>
	)
}

export default Partners