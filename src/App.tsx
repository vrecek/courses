import React from 'react';
import './css/index.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Layout/Navigation/Navigation';
import MAIN_PAGE from './components/MAIN_PAGE/MAIN_PAGE';
import ArrowTop from './components/Layout/ArrowTop';
import { PossibleUser, Ref } from './interfaces/CommonInterfaces';
import scrollAfter from './functions/scrollAfter';
import Footer from './components/Layout/Footer/Footer';
import REGISTER_PAGE from './components/LOGIN_REGISTER_PAGE/Register/REGISTER_PAGE';
import LOGIN_PAGE from './components/LOGIN_REGISTER_PAGE/Login/LOGIN_PAGE';
import CONTACT_PAGE from './components/CONTACT_PAGE/CONTACT_PAGE';
import OFFER_PAGE from './components/OFFER_PAGE/OFFER_PAGE';
import ORDER_PAGE from './components/ORDER_PAGE/ORDER_PAGE';
import COURSE_PAGE from './components/COURSE_PAGE/COURSE_PAGE';

const UserContext = React.createContext<PossibleUser>(null)

function App() {
	const arrRef: Ref = React.useRef<HTMLDivElement>(null)
	const navRef: Ref = React.useRef<HTMLDivElement>(null)
	const [user] = React.useState<PossibleUser>(JSON.parse(window.localStorage.getItem('user_logged') ?? 'null'))

	React.useEffect(() => scrollAfter(navRef.current!, arrRef.current!, 800), [])

   return (
		<div className="App">

			<UserContext.Provider value={user}>	


				<Navigation reference={navRef} />
				
				<Routes>

					<Route path='/' element={ <MAIN_PAGE /> } />
					
					<Route path='/register' element={ <REGISTER_PAGE /> } />
					<Route path='/login' element={ <LOGIN_PAGE /> } />

					<Route path='/contact' element={ <CONTACT_PAGE /> } />

					<Route path='/offer' element={ <OFFER_PAGE /> } />
					<Route path='/finalize-order' element={ <ORDER_PAGE /> } />

					<Route path='/course'>

						<Route path='' element={ <COURSE_PAGE /> } />
						<Route path=':chapter/:lesson' element={ <COURSE_PAGE /> } />

					</Route>

				</Routes>

				<Footer />

				<ArrowTop reference={arrRef} />


			</UserContext.Provider>

		</div>
   )
}

export default App;
export {UserContext}
