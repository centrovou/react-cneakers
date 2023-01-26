import React from 'react'
import AppContext from '../context';

const Info = ({image, title, descr}) => {
const {setCardOpened} = React.useContext(AppContext);


  return (
    <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img class="mb-20" width="120px" height="120px" src={image} alt="Empty" />
            <h2>{title}</h2>
            <p class="opacity-6">{descr}</p>
            <button onClick={() => setCardOpened(false)} class="greenButton">
              <img onClick src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
  )
}

export default Info