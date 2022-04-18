import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact={true} path='/' element={<Login />}/>
                <Route exact={true} path='/cadastrar' element={<Cadastro />}/>
                <Route exact={true} path='/home' element={<Home />}/>
                <Route exact={true} path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;