import React from 'react'

const Header = (props) => {
  return (
    <header className=" d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
        <img width={40}  height={40} src="/img/logo.png"  alt=""/>
          <div className="headerInfo">
             <h3>REACT PIZDEC</h3>
            <p className="opacity-">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
            <li onClick={props.onClickCard} className="mr-30 cu-p">
              <img className="mr-15" width={18}  height={18} src="/img/cart.svg"  alt=""/>
              <span>1205 руб</span>
              </li>
            <li>
            <img width={18}  height={18} src="/img/user.svg"  alt=""/>
            </li>
          </ul>
      </header>
  )
}

export default Header