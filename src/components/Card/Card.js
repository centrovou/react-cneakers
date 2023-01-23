import React from 'react'
import styles from './Card.module.scss'

const Card = ({onFavorite,imageUrl,title,price, onPlus, favorited = false}) => {

  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({imageUrl,title,price});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  
  return (
    <div className={styles.card}>
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
        </div>

  )
}

export default Card