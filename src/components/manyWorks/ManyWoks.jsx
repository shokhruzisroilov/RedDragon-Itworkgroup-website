
import "./ManyWorks.scss"

import manyHappiy from '../../imges/many-happy.png'
import arrowWork from '../../imges/Arrow-work.png'

function ManyWorks () {
	return (
		<div className='many__works'>
			<span>
				<p>
					Qulaylik uchun biz xizmatlarimizni barcha tariflar bo'yichapaketlarga
					ajratdik, ammo sizda hali ham shaxsiy variantingizni yig'ish
					imkoniyati mavjud.
				</p>
				<h2>Kichik biznesuchun web-saytlar</h2>
			</span>
			<div className='many__section'>
				<article>
					<h3>Lending</h3>
					<p>3 kunda bir sahifali sayt</p>
					<span>
						<h2>990.000</h2>
					</span>
					<span>
						<img src={manyHappiy} alt='many happy' />
						<p>Premium detallar sovg‘aga</p>
					</span>
					<button>
						<p>batafsil</p>
						<img src={arrowWork} alt='arrow work' />
					</button>
				</article>
				<article>
					<h3>Biznes sayt</h3>
					<p>5 kunda ko‘p sahifali sayt</p>
					<span>
						<h2>1.490.000</h2>
					</span>
					<span>
						<p>Premium detallar sovg‘aga</p>
					</span>
				</article>
				<article>
					<h3>Internet do‘kon </h3>
					<p>7 kunda onlayn sotuv sayt</p>
					<span>
						<h2>1.990.000</h2>
					</span>
					<span>
						<p>Premium detallar sovg‘aga</p>
					</span>
				</article>
			</div>
		</div>
	)
}

export default ManyWorks