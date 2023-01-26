import React from 'react'
import Info from './Info'
import AppContext from '../context';
const Drawer = ({onClose, onRevome, items = [] }) => {
  const {setCartItems, cartItems} = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj)=> obj.price + sum, 0);
  const [zxc, isZxc] = React.useState(false);

  const onClickZxc = () => {
    isZxc(true);
    setCartItems([]);
  }




  
  return (
    <div  className="overlay">
    
    <div className="drawer">
    <h2 className="mb-30 d-flex justify-between align-center">Корзина
    <img onClick={onClose} className="cu-p" width={40}  height={40} src="/img/btn-remove.svg"  alt=""/>
    </h2>
      {
        items.length > 0 ? 
        <div>
          <div className="items">
   {
     items.map(obj => (
      <div key={obj.id} className="cartItem d-flex align-center mb-20">
      
      <div 
      style={{backgroundImage: `url(${obj.imageUrl})`}} 
      className="cartItemImg">
    </div>
      <div className="mr-20 flex">
        <p className="mb-5">{obj.title}</p>
        <b>{obj.price} руб.</b>
      </div>
      <img onClick={() => onRevome(obj.id)} className="removeBtn" width={40}  height={40} src="/img/btn-remove.svg"  alt=""/>
    </div>
     ))
   }
    </div>

<div className="cardTotalBlock">
<ul>
  <li className="d-flex">
  <span>Итого:</span>
  <div></div>
  <b>{totalPrice} руб. </b>
  </li>
  <li className="d-flex">
  <span>Налог 5%:</span>
  <div></div>
  <b>{totalPrice / 100 * 5} руб.</b>
  </li>
</ul>
<button onClick={onClickZxc} className="greenButton">Оформить заказ
  <img src="/img/arrow.svg" alt="" />
</button>
</div>
        </div>

    :
    (
      <Info 
      title={zxc ? "Заказ оформлен!" : "Корзина пустая"}
      descr={zxc ? 'Ваш заказ #18 скоро будет передан курьерской доставке' :'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
      image={zxc ? "/img/zxc.jpg" : "/img/empty-cart.jpg"} 
      />
    )
    

      }
    
    
    

      
    

  </div>
  </div>
  )
}

export default Drawer