import { useState } from 'react'
import './App.scss'

import Header from '../header/Heaader'
import HomeMenu from '../homeMenu/HomeMenu'
import OurServices from '../ourServices/OurServices'
import ServicesWrok from '../servicesWork/servicesWork'
import Partners from '../partners/Partners'
import ManyWorks from '../manyWorks/ManyWoks'

function App() {

  return (
		<>
			<Header />
			<HomeMenu />
			<OurServices />
			<ServicesWrok />
			<Partners />
			<ManyWorks />
		</>
	)
}

export default App
