import React from 'react'
import '../index.scss'

const Drawer = ({onClose,items}) => {
  return (

      <div   className="overlay">

      <div className="drawer">
        <h2 className='mb-30  justify-between'>Корзина</h2>
        <img  onClick={onClose} className='removeBtn cartItem p ' src="/img/btn-remove.svg" alt="close" />

           <div className="items">
            {items.map((obj)=>(
                <div className="cartItem d-flex aline-center" >
                <img  className='mr-20'  height={70}  width={70} src="/img/1.jpeg" alt="Sneakers" />
                <div  style={{backgroundImage:`url(${obj.imageUrl})`}}className="cartItemImg"></div>
      
                <div className='mr-20'>
                  <p className='mb-5'>{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
                  <img  className='removeBtn'src="/img/btn-remove.svg" alt="remove" />
              </div>

            ))}
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
