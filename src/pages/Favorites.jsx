import React from 'react'
import Card from '../components/Card/Card';
const Favorites = ({items,onAddToFavorite}) => {
  return (
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between"> 
        <h1>Мои закладки</h1>
        </div>
        <div className="sneakers d-flex flex-wrap">
        {
          items
          .map((item, index) => (
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