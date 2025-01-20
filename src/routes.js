import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Socials from './components/socials';
import Buscar from './pages/buscar';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/buscar' element={<Buscar/>}/>
                </Routes>    
            </main>
            
            
            <Socials/>
        </BrowserRouter>
    )
}