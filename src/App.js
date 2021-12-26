import React from 'react';
// Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import Navbar from './components/Navbar'
import Register from './components/Register';
import Login from './components/Login';
import AppSelector from './components/AppSelector';
import DeckView from './components/DeckView';
import EditCard from './components/EditCard';
import EditDeck from './components/EditDeck';
// Context

// Styles
import { GlobalStyle } from './GlobalStyle';
import CardLearn from "./components/CardLearn";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      {/*<Route path='/register' element={<Register />} />*/}
      {/*<Route path='/login' element={<Login />} />*/}
      <Route path='/apps' element={<AppSelector />} />
      <Route path='/apps/learn' element={<DeckView />} />
      <Route path='/apps/learn/card' element={<CardLearn />} />
      <Route path='/apps/edit/cards' element={<EditCard />} />
      <Route path='/apps/edit/decks' element={<EditDeck />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
