import React from 'react';
import './css/index.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Layout/Navigation/Navigation';
import MAIN_PAGE from './components/MAIN_PAGE/MAIN_PAGE';
import ArrowTop from './components/Layout/ArrowTop';
import { Ref } from './interfaces/CommonInterfaces';
import scrollAfter from './functions/scrollAfter';
import Footer from './components/Layout/Footer/Footer';

function App() {
	const arrRef: Ref = React.useRef<HTMLDivElement>(null)
	const navRef: Ref = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => scrollAfter(navRef.current!, arrRef.current!, 800), [])

   return (
		<div className="App">

			<Navigation reference={navRef} />
			
			<Routes>

				<Route path='/' element={ <MAIN_PAGE /> } />

			</Routes>

			<Footer />

			<ArrowTop reference={arrRef} />

		</div>
   )
}

export default App;
