import React from 'react'
import Card from '../components/Card/Card';


function Home ({items,searchValue,searchInput,onAddToCart,cartItems,isLoading,onAddToFavorite})  {

  const renItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
            />
            ));
  }
  return (
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between"> 
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
            <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input onChange={searchInput} type="text" value={searchValue} placeholder="Поиск..." />
            </div>
        </div>
        <div className="d-flex flex-wrap">{renItems()}</div>
      </div>
  )
}

export default Home