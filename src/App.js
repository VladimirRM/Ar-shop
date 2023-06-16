
import './App.css';
import './index.scss'

function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between aline-center p-40' >
        <div className='d-flex aline-center'>
          <img  width={40} height={40} src='/img/logo.png'/>
        <svg/>
        <div className='headerInfo'>
          <h3 className=' text-uppercase' >React Sneakers</h3>
          <p> 
            Mагазин лучших кросовок
          </p>
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
        <h1>Все кроссовки</h1>
        <div className="card">
          <img  width={133}height={112} src="/img/1.jpeg" alt="Sneakers" />
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className='d=flex justify-between'>
            <div className='d-flex  flex-column'>
              <span>Price</span>
              <b>12 999grn</b>
            </div>
            <button>
              <img   width={11}  height={11}  src="/img/plus.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default App;
