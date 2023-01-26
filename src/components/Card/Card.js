import React from 'react'
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"

const Card = ({id,onFavorite,imageUrl,title,price, onPlus, favorited = false , added = false, loading = false}) => {

  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({id,imageUrl,title,price});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  
  return (
    <div className={styles.card}>
      {
        loading ? 
        <ContentLoader 
    speed={2}
    width={150}
    height={200}
    viewBox="0 0 150 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="94" y="311" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
    <rect x="-1" y="100" rx="10" ry="10" width="150" height="15" /> 
    <rect x="2" y="127" rx="10" ry="10" width="93" height="15" /> 
    <rect x="6" y="155" rx="10" ry="10" width="80" height="24" /> 
    <rect x="107" y="143" rx="10" ry="10" width="32" height="32" />
  </ContentLoader>
  :
        <>
        <div className={styles.favorite} onClick={onClickFavorite}>
          <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="heart-unliked" />
          </div>
          <img width={133} height={112} src={imageUrl} alt="" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
             <div className="d-flex flex-column ">
               <span>Цена:</span>
                <b>{price} руб.</b>
             </div>
               <img className={styles.plus} onClick={onClickPlus}  src={isAdded ? "img/btn-cheked.svg" : "img/btn-plus.svg"} alt="Plus" />
          </div>
          </>
      }
        </div>

  )
}

export default Card