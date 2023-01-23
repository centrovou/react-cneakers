
import Drawer from './components/Drawer';
import Header from './components/Header';
import React from 'react'
import axios from 'axios'
import {Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Favorites from './pages/Favorites';
function App() {
  const [items, setItems] = React.useState([]); 
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState(''); 
  const [cardOpened, setCardOpened] = React.useState(false); 
  

  React.useEffect(() => {
      axios.get('https://63c9c4d2320a0c4c954ef039.mockapi.io/items').then( res =>{
        setItems(res.data);
      });
    
      axios.get('https://63c9c4d2320a0c4c954ef039.mockapi.io/cart').then( res =>{
        setCartItems(res.data);
      });
      axios.get('https://63cde86cfba6420d4d75cbb9.mockapi.io/favorites').then( res =>{
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://63c9c4d2320a0c4c954ef039.mockapi.io/cart', obj);
    setCartItems(prev => [...prev,obj]);
  }


  const onAddToFavorite = (obj) => {
    axios.post('https://63cde86cfba6420d4d75cbb9.mockapi.io/favorites', obj);
    setFavorites(prev => [...prev,obj]);
  }

  const searchInput = (event) => {
    
    setSearchValue(event.target.value);
  }

  const onRevomeItem = (id) => {
    axios.delete(`https://63c9c4d2320a0c4c954ef039.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }
  return (
    <div className="wrapper clear">
      
    {cardOpened && <Drawer items={cartItems} onClose={()=> setCardOpened(false)} onRevome={onRevomeItem}/>}
      <Header onClickCard={()=> setCardOpened(true)}/>


      <Routes>
      <Route path="/" exact element={

        <Home
        items={items}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}

        />

      }
      ></Route>
      <Route path="/favorites" element={<Favorites
       items={favorites}
       onAddToFavorite={onAddToFavorite}
        />}>

        </Route>
      </Routes>
    </div>
  )
}

export default App;
