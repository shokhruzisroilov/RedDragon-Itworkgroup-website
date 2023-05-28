
import "./ourServices.scss"

import servisec from "../../imges/Servisec-img.png"

function OurServices () {
	return (
		<div className='our__services'>
			<div className='services__img'>
				<img src={servisec} alt='servisec img' />
			</div>
			<div className='services__text'>
				<div className='span'>
					<span></span>
					<h3>biz haqimizda</h3>
				</div>
				<div className='text'>
					<h2>onlayn biznesda kamchilik sezyapsizmi?</h2>
					<p>
						WebPark - har qanday murakkablikdagi saytlarni ishlab chiqish
						vaijtimoiy tarmoqlarda SMM-ni targ'ib qilish
						agentligi.Mutaxassislarimiz mahalliy va xorijiy brendlar
						bilanmuvaffaqiyatli ish olib borishdi.
					</p>
					<h3>bizni ijtimoiy tarmoqlardan kuzating</h3>
					<div className='media'>
						<span>
							<i class='fa-brands fa-telegram'></i>
							<a href='#'>Telegram</a>
						</span>
						<span>
							<i class='fa-brands fa-telegram'></i>
							<a href='#'>Telegram</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurServices