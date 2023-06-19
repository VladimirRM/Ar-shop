
import './App.css';
import './index.scss'

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
      <div className="drawer">
        <h2>Корзина</h2>


        <div className="cartItem d-flex aline-center" >
          <img  className='mr-20'  height={70}  width={70} src="/img/1.jpeg" alt="Sneakers" />
          <div className="cartItemImg"></div>

          <div className='mr-20'>
            <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <b>12 999grn</b>
          </div>
            <img  className='removeBtn'src="/img/btn-remove.svg" alt="remove" />
        </div>
       </div>
      </div>
      
      <header className='d-flex justify-between aline-center p-40' >
        <div className='d-flex aline-center'>
          <img  width={40} height={40} src='/img/logo.png'/>
        <svg/>
        <div className='headerInfo'>
          <h3 className=' text-uppercase' >React Sneakers</h3>
          <p className='opacity-5'> 
            Mагазин лучших кросовок
          </p>y
          </div>
          <ul className='d-flex'>
            <li  className='mr-30'>
              <img width={18}  height={18} src='/img/cart.svg'/>
              <span>1250 grn</span>
              <svg/>
            </li>
            <li>
              <img  width='18' height={18} src='/img/user.svg'/>
            </li>
          </ul>
        </div>
      </header>
      <div className="content p-40">
        <div className='d-flex  aline-center mb-40 justify-between'>
        <h1 >Все кроссовки</h1>
           <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text"  placeholder='Поиск...' />
           </div>
        </div>
        <div className='d-flex'>
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
        <div className="card">
          <img  width={133}height={112} src="/img/2.jpeg" alt="Sneakers" />
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
        <div className="card">
          <img  width={133}height={112} src="/img/3.jpeg" alt="Sneakers" />
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
        <div className="card">
          <img  width={133}height={112} src="/img/4.jpeg" alt="Sneakers" />
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
      </div>
    </div>
  );
}

export default App;
