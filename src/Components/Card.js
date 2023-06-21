import React from 'react'

const Card = (props) => {

 const onClickButton = ()=>{

 }

  return (
    <div>
      <div className="card">
<div className='favorite'>
<img src="/img/heart-unliked.svg" alt="Unliked" />

</div>
<img  width={133}height={112} src={props. imageUrl} alt="Sneakers" />
<h5>{props.title}</h5>
<div className='d-flex justify-between aline-center'>
  <div className='d-flex  flex-column '>
    <span>Price</span>
    <b>{props.price}</b>
  </div>
  <button className='button'>
    <img   width={11}  height={11}  src="/img/plus.svg" alt="" 
    onClick={onClickButton}/>
  </button>
</div>
</div>
    </div>
  )
}

export default Card
