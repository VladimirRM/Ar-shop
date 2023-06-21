import React from 'react'
import '../index.scss'

const Drawer = () => {
  return (

      <div   className="overlay">

      <div className="drawer">
        <img  className='removeBtn cartItem d-flex ' src="/img/btn-remove.svg" alt="remove" />
        <h2 className='mb-30 d-flex justify-between'>Корзина</h2>

        <div className=" mb-20" >
          <img  className='mr-20'  height={70}  width={70} src="/img/1.jpeg" alt="Sneakers" />
          <div  style={{backgroundImage:'url(/img/1.jpeg)'}}className="cartItemImg"></div>

          <div className='mr-20 cu-p'>
            <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <b>12 999grn</b>
          </div>
            <img  className='removeBtn'src="/img/btn-remove.svg" alt="remove" />
        </div>
        <div className="cartItem d-flex aline-center" >
          <img  className='mr-20'  height={70}  width={70} src="/img/1.jpeg" alt="Sneakers" />
          <div  style={{backgroundImage:'url(/img/1.jpeg)'}}className="cartItemImg"></div>

          <div className='mr-20'>
            <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <b>12 999grn</b>
          </div>
            <img  className='removeBtn'src="/img/btn-remove.svg" alt="remove" />
        </div>
        <div className="items">
          <div className="cartTotalBlock">
          <ul>
            <li className='d-flex'>
              <span>Итого:</span>
              <div></div>
              <b>21 334grn</b>
           </li>
            <li className='d-flex'>
              <span>Налог 5%</span>
              <div></div>
              <b>1074grn</b>
            </li>
          </ul>
          <button className='greenButton'>Оформить заказ<img src='/img/arrow.svg'  alt='Arrow'/></button>
          </div>
       
        </div>
       </div>
      </div>
  )
}

export default Drawer
