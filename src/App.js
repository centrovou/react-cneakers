import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import React from 'react'



function App() {
  const [items, setItems] = React.useState([]); 
  const [cartItems, setCartItems] = React.useState([]); 
  const [cardOpened, setCardOpened] = React.useState(false); 
  

  React.useEffect(() => {
    fetch('https://63c9c4d2320a0c4c954ef039.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev,obj]);
  }
  return (
    <div className="wrapper clear">
      
    {cardOpened && <Drawer items={cartItems} onClose={()=> setCardOpened(false)} />}
      <Header onClickCard={()=> setCardOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between"> 
        <h1>Все кроссовки</h1>
            <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
            </div>
        </div>
        <div className="sneakers d-flex flex-wrap">
        {
          items.map((item) => (
            <Card
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={() => console.log('добавили закладки')}
            onPlus={(obj) =>onAddToCart(item)}
            />
            ))
        }


        </div>
      </div>
    </div>
  )
}

export default App;
