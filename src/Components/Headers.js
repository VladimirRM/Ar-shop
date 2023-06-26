import React from 'react'
import { Route,Link } from 'react-router-dom'

const Headers = (props) => {
  console.log(props)
  return (
    <div>
          <header className='d-flex justify-between aline-center p-40' >
        <div className='d-flex aline-center'>
        <Link to='/'>

          <img  width={40} height={40} src='/img/logo.png'/>
        <svg/>
        <div className='headerInfo'>
          <h3 className=' text-uppercase' >React Sneakers</h3>
          <p className='opacity-5'> 
            Mагазин лучших кросовок
          </p>


          </div>
          </Link>
          <ul className='d-flex'>
            <li onClick={props.onClickCart} className=' '>
              <img width={18}  height={18} src='/img/cart.svg' alt='cart'/>
              <span>1250 grn</span>
              <svg/>
            </li>
            <li>
              <Link to='/favorites '>
            <img width={18}  height={18} src='/img/heart.svg' alt='fav'/>
            </Link>
            </li>
            <li>
              <img  width='18' height={18} src='/img/user.svg'/>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Headers
