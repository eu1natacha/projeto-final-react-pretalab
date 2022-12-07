import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Menu } from './Components/Menu'

import {Inicio} from './pages/Inicio'
import {Sobre} from './pages/Sobre'
import {Portfolio} from './pages/Portfolio'
import {Contato} from './pages/Contato'

export function Router(){
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element= {<Inicio />}/>
                <Route path="/sobre" element= {<Sobre />}/>
                <Route path="/portfolio" element= {<Portfolio />}/>
                <Route path="/contato" element= {<Contato />}/>
            </Routes>   
            <Footer />        
        </BrowserRouter>
    )
}