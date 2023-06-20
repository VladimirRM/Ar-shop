
import './App.css';
import './index.scss'
import Card from './Components/Card';
import Headers from './Components/Headers';
import Drawer from './Components/Drawer';

const arr = [
  {name:'Мужские Кроссовки Nike Blazer Mid Suede' ,price: 12999 },
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 13999}
  
]

function App() {


  return (
    <div className="wrapper clear">
      <Headers/>
      <Drawer/>
      
  
      <div className="content p-40">
        <div className='d-flex  aline-center mb-40 justify-between'>
        <h1 >Все кроссовки</h1>
           <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text"  placeholder='Поиск...' />
           </div>
        </div>
        <div className='d-flex'>
      </div>
      <Card/>
      </div>
    </div>


  );
}

export default App;
