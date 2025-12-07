import { Routes,Route } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Service } from './pages/Service';

function App() {

  return (
    <>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='/about-us' element={ <AboutUs /> } />
        <Route path='/service' element={ <Service /> } />
        
      </Routes>
    </>
  )
}

export default App
