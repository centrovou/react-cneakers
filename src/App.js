
import Drawer from './components/Drawer';
import Header from './components/Header';
import React from 'react'
import axios from 'axios'
import {Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Favorites from './pages/Favorites';

import AppContext from './context';





function App() {
  const [items, setItems] = React.useState([]); 
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState(''); 
  const [cardOpened, setCardOpened] = React.useState(false); 
  const [isLoading, setIsLoading] = React.useState(true); 
  

  React.useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        const CartRes = await axios.get('https://63c9c4d2320a0c4c954ef039.mockapi.io/cart');
        const FavRes = await axios.get('https://63cde86cfba6420d4d75cbb9.mockapi.io/favorites');
        const itemsRes = await axios.get('https://63c9c4d2320a0c4c954ef039.mockapi.io/items');
        setCartItems(CartRes.data);
        setFavorites(FavRes.data);
        setItems(itemsRes.data);
        setIsLoading(false)
      }


      fetchData();
  }, []);

  const onAddToCart = (obj) => {
    
    if (cartItems.find((item)=> Number(item.id) === Number(obj.id))){
      axios.delete(`https://63c9c4d2320a0c4c954ef039.mockapi.io/cart/${obj.id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
    }
    else {
      axios.post('https://63c9c4d2320a0c4c954ef039.mockapi.io/cart', obj);
    setCartItems(prev => [...prev,obj]);
    }
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
    <AppContext.Provider value={{items,cartItems, favorites, setCardOpened , setCartItems}}>
      <div className="wrapper clear">
      
      {cardOpened && <Drawer items={cartItems} onClose={()=> setCardOpened(false)} onRevome={onRevomeItem}/>}
        <Header onClickCard={()=> setCardOpened(true)}/>
  
  
        <Routes>
        <Route path="/" exact element={
  
          <Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
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
    </AppContext.Provider>
  )
}

export default App;
