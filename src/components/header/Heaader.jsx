import "./Header.scss"

import HeaderLogo from "../../imges/logo.png"
import searchIcon from "../../imges/search-icon.png"
import lockIcon from "../../imges/lock-icon.png"

function Header () {
	return (
		<header>
			<div className='header__content'>
				<div className='header__logo'>
					<a href="#"><img src={HeaderLogo} alt='Header logo' /></a>
					<h3><span>Red</span> Dragon <br />IT Work <span>Group</span></h3>
				</div>
				<nav>
					<ul>
						<li>
							<a href='#'>Asosiy</a>
						</li>
						<li>
							<a href='#'>Xizmatlar</a>
						</li>
						<li>
							<a href='#'>Loyihalar</a>
						</li>
						<li>
							<a href='#'>Bloglarimiz</a>
						</li>
						<li>
							<a href='#'>Biz haqimizda</a>
						</li>
					</ul>
				</nav>
				<div className='header__conect'>
					<div className='conect'>
						<div className='conect__icon'>
							<i class='fa-brands fa-facebook'></i>
							<i class='fa-brands fa-square-instagram'></i>
							<i class='fa-brands fa-telegram'></i>
						</div>
						<div className='language'>
							<p>Rus</p>
							<p>Uzb</p>
						</div>
						<div className='search'>
							<img src={searchIcon} alt='search icon' />
						</div>
					</div>
					<div className='click__button'>
						<h3>To‘lov usuli</h3>
						<img src={lockIcon} alt='lock icon' />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header