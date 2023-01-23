import React from 'react'


const Drawer = ({onClose,onRevome, items = [] }) => {
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
      <div className="cartItem d-flex align-center mb-20">
      
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
  <b>21 498 руб. </b>
  </li>
  <li className="d-flex">
  <span>Налог 5%:</span>
  <div></div>
  <b>1074 руб.</b>
  </li>
</ul>
<button className="greenButton">Оформить заказ
  <img src="/img/arrow.svg" alt="" />
</button>
</div>
        </div>

    :
    <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
            <h2>Корзина пустая</h2>
            <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} class="greenButton">
              <img onClick={onClose} src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>

      }
    
    
    

      
    

  </div>
  </div>
  )
}

export default Drawer