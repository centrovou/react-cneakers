import React from 'react'
import Card from '../components/Card/Card';

import AppContext from '../context';

const Favorites = ({onAddToFavorite}) => {

  const {favorites} =React.useContext(AppContext);
  
  return (
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between"> 
        <h1>Мои закладки</h1>
        </div>
        <div className="sneakers d-flex flex-wrap">
        {
          
          favorites.map((item, index) => (
            <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            favorited={true}
            />
            ))
        }
        </div>
      </div>
  )
}

export default Favorites