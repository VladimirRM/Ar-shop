
import './App.css';
import './index.scss'
import Card from './Components/Card';
import Headers from './Components/Headers';
import Drawer from './Components/Drawer';

const arr = [
  {title:'Мужские Кроссовки Nike Blazer Mid Suede' ,price: 12999,imageUrl: '/img/1.jpeg' },
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 13999,imageUrl: '/img/2.jpeg'},
  {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 15900,imageUrl: '/img/3.jpeg'},
  {title: 'Мужские Кроссовки Under Armour Curry 8', price: 10900,imageUrl: '/img/4.jpeg'},

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
          {arr.map((obj)=>(
        <Card
        title={obj.name}
        price={obj.price}
        imageUrl={obj.imageUrl}
        />

          ))}

      </div>

      </div>
    </div>


  );
}

export default App;
