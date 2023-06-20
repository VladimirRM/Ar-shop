
import './App.css';
import './index.scss'
import Card from './Components/Card';
import Headers from './Components/Headers';

function App() {
  return (
    <div className="wrapper clear">
      <Headers/>
      
      
  
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
      <Card/>
      </div>
    </div>


  );
}

export default App;
