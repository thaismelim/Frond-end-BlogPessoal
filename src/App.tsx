import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroPost from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTema from './components/temas/listaTemas/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import DeletarPost from './components/postagens/deletarPostagem/DeletarPostagem';
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify';
import store from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import Perfil from './components/perfil/Perfil';
import { useState } from 'react';

import './App.css';


function App() {
  const [inputText, setInputText] = useState("");
  return(
    <Provider store={store}>
      <ToastContainer/>
    <BrowserRouter>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/atualizarTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPost />} />
            <Route path="/apagarTema/:id" element={<DeletarTema />} />
          </Routes>
        </div>
      <Footer />
    </ BrowserRouter >
    </Provider>
  )
}

export default App;