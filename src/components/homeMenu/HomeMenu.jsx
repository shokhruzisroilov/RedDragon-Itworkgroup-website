
import "./HomeMenu.scss"

import arrow from "../../imges/arrow-work.png"
import trueIcon from "../../imges/true-icon.png"
import arrowIcon from "../../imges/arrow-right.png"
import messing from "../../imges/messing.png"

function HomeMenu () {
	return (
		<div className='home__menu'>
			<div className='home__text'>
				<h1>Biznesdan ortmay rivojlanishni bizga topshiring</h1>
				<p>
					Biz SMM-ni ilgari surishva samarali saytlarni rivojlantirishsohasida
					kompleks yondashuvni taklif qilamiz.
				</p>
				<div className='conect'>
					<button className='work'>
						Xizmatlarimiz <img src={arrow} alt='arrow' />
					</button>
					<button className='contact'>kontakt</button>
				</div>
			</div>
			<div className='our__services'>
				<article>
					<img src={trueIcon} alt='true icon' />
					<span>
						<h3>Smm</h3>
						<p>Ijtimoiy rivojlanish</p>
					</span>
					<img className='arrow__right' src={arrowIcon} alt='arrow icon' />
				</article>
				<article>
					<img src={trueIcon} alt='true icon' />
					<span>
						<h3>Sayt yaratish</h3>
						<p>Mukammal saytlar</p>
					</span>
					<img className='arrow__right' src={arrowIcon} alt='arrow icon' />
				</article>
				<article>
					<img src={trueIcon} alt='true icon' />
					<span>
						<h3>UI,UX dizayn</h3>
						<p>Istalgan ui,ux dizayn</p>
					</span>
					<img className='arrow__right' src={arrowIcon} alt='arrow icon' />
				</article>
			</div>
			<div className='messing'>
				<img src={messing} alt='messing' />
				<div className="border"></div>
			</div>
		</div>
	)
}
export default HomeMenu