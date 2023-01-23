import React from 'react'
import Card from '../components/Card/Card';
const Home = ({items,searchValue,searchInput,onAddToCart}) => {
  return (
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between"> 
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
            <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input onChange={searchInput} type="text" value={searchValue} placeholder="Поиск..." />
            </div>
        </div>
        <div className="sneakers d-flex flex-wrap">
        {
          items
          .filter(item => item.title.includes(searchValue))
          .map((item, index) => (
            <Card
            key={index}
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
  )
}

export default Home