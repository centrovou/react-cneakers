import React from 'react'
import Card from '../components/Card/Card';
import axios from 'axios'
import AppContext from '../context';


const Orders = () => {
  const {onAddToFavorite,onAddToCart} = React.useContext(AppContext);

  const [orders, setOrders] = React.useState([]);

  React.useEffect(()=> {
    
    (async()=>{
      const {data} = await axios.get('https://63cde86cfba6420d4d75cbb9.mockapi.io/Orders');
      setOrders((data.map(obj => obj.items).flat()))
    })();

  }, []);

  return (
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between"> 
        <h1>Мои заказы</h1>
        </div>
        <div className="sneakers d-flex flex-wrap">
        {
          
          orders.map((item, index) => (
            <Card
             key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        
        {...item}       />
      
            ))
        }
        </div>
      </div>
  )
}

export default Orders