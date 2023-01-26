import React from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../context';
const Header = (props) => {

  const {cartItems} = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj)=> obj.price + sum, 0);
  
  return (
    <header className=" d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
        <img width={40}  height={40} src="/img/logo.png"  alt=""/>
          <div className="headerInfo">
          <Link to='/'>
          <h3>REACT PIZDEC</h3>
            <p className="opacity-">Магазин лучших кроссовок</p>
            </Link>
          </div>
        </div>
        <ul className="headerRight d-flex">
            <li onClick={props.onClickCard} className="mr-30 cu-p">
              <img className="mr-15" width={18}  height={18} src="/img/cart.svg"  alt=""/>
              <span>{totalPrice} руб</span>
              </li>
              <li className='mr-30 cu-p' >
              <Link to='/favorites'>
              <img width={18}  height={18} src="/img/favorite.svg"  alt=""/>
              </Link>
            </li>
            <li>
            <Link to='/Orders'>
            <img width={18}  height={18} src="/img/user.svg"  alt=""/>
              </Link>
            </li>
          </ul>
      </header>
  )
}

export default Header