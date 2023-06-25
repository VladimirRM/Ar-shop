import React from 'react'
import styles from './Card.module.scss'

const Card = ({title,imageUrl,price,onFavorite,onPlus}) => {

  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(false)

 const onClickPlus = ()=>{
      onPlus({title,imageUrl,price})
      setIsAdded(!isAdded)
 }

 const onClickFavorite = ()=>{
  onFavorite({title,imageUrl,price})
       setIsFavorite(!isFavorite)
 }

  return (
    <div>
      <div className={styles.card}>
<div className={styles.favorite}  onClick={onFavorite}>
<img onClick={onClickFavorite} src={ isFavorite ? "/img/liked.png" : "/img/heart-unliked.svg" } />
</div>
<img  width={133}height={112} src={imageUrl} alt="Sneakers" />
<h5>{title}</h5>
<div className='d-flex justify-between aline-center'>
  <div className='d-flex  flex-column '>
    <span>Price</span>
    <b>{price}</b>
  </div>

    <img  className={styles.plus} onClick={onClickPlus}  width={11}  height={11}  
    src={isAdded ? "/img/btn-checked.svg": '/img/btn-plus.svg'} alt="Checked" 
    />

</div>
</div>
    </div>
  )
}

export default Card
