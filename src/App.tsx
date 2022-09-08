import React from 'react';
import './css/index.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Layout/Navigation/Navigation';
import MAIN_PAGE from './components/MAIN_PAGE/MAIN_PAGE';

function App() {
	// po boku social fixed
   return (
		<div className="App">

			<Navigation />
			
			<Routes>

				<Route path='/' element={ <MAIN_PAGE /> } />

			</Routes>

		</div>
   )
}

export default App;
