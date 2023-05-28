
import './ServicesWork.scss'

import arrowWork from '../../imges/Arrow-work.png'
import figIcon from "../../imges/shakil-icon.png"
import smmImges from "../../imges/smm-imges.png"
import uxuiImges from "../../imges/ux-ui-imges.png"
import websiteImges from '../../imges/website-imges.png'


function ServicesWrok () {
	return (
		<div className='services__work'>
			<div className='services__text'>
				<div className='span'>
					<span></span>
					<h3>hizmatlarimiz</h3>
				</div>
				<div className='text'>
					<h2>Bizning xizmatlarimiz</h2>
					<p>
						Qulaylik uchun biz xizmatlarimizni barcha yo'nalishlar bo'yicha
						paketlarga ajratdik, ammo sizda o'zingizning shaxsiy variantingizni
						yig'ish imkoniyati ham mavjud.
					</p>
					<button>
						<p>batafsil</p>
						<img src={arrowWork} alt='' />
					</button>
				</div>
			</div>
			<div className='services__img'>
				<div className='section__article'>
					<span>
						<article>
							<img src={smmImges} alt='smm imges' />
							<h3>Smm</h3>
						</article>
						<article>
							<img src={uxuiImges} alt='uxuiImges' />
							<h3>Ui ux dizayn</h3>
						</article>
					</span>
					<article>
						<img src={websiteImges} alt='websiteImges' />
						<h3>Web sayt</h3>
					</article>
				</div>
				<img className='fig' src={figIcon} alt='fig icon' />
			</div>
		</div>
	)
}

export default ServicesWrok