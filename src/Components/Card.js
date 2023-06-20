import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="card">
<div className='favorite'>
<img src="/img/heart-unliked.svg" alt="Unliked" />

</div>
<img  width={133}height={112} src="/img/1.jpeg" alt="Sneakers" />
<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
<div className='d-flex justify-between aline-center'>
  <div className='d-flex  flex-column '>
    <span>Price</span>
    <b>12 999grn</b>
  </div>
  <button className='button'>
    <img   width={11}  height={11}  src="/img/plus.svg" alt="" />
  </button>
</div>
</div>
    </div>
  )
}

export default Card
