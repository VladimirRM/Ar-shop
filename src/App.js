import React from 'react';
import './App.css';
import './index.scss'
import Card from './Components/Card/Card';
import Headers from './Components/Headers';
import Drawer from './Components/Drawer';

// const arr = [
//   {title:'Мужские Кроссовки Nike Blazer Mid Suede' ,price: 12999,imageUrl: '/img/1.jpeg' },
//   {title: 'Мужские Кроссовки Nike Air Max 270', price: 13999,imageUrl: '/img/2.jpeg'},
//   {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 15900,imageUrl: '/img/3.jpeg'},
//   {title: 'Мужские Кроссовки Under Armour Curry 8', price: 10900,imageUrl: '/img/4.jpeg'},

// ]

function App() {
  const [items,setItems] = React.useState([
    {
    "title":"Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 12999,
    "imageUrl": "/img/1.jpeg"
    },
    {
    "title": "Мужские Кроссовки Nike Air Max 270",
    "price": 13999,
    "imageUrl": "/img/2.jpeg"
    },
    {
    "title": "Кроссовки Puma X Aka Boku Future Rider",
     "price": 15900,
     "imageUrl": "/img/3.jpeg"
    },
    {
    "title": "Мужские Кроссовки Under Armour Curry 8", 
    "price": 11900,
    "imageUrl": "/img/5.jpeg"
    },
    { "title": "Мужские Кроссовки Nike Kyrie 7", 
    "price": 13900,
    "imageUrl": "/img/6.jpeg"
    },
    { "title": "Мужские Кроссовки Jordan Air Jordan 11", 
    "price": 9900,
    "imageUrl": "/img/7.jpeg"
    },
    { "title": "Мужские Кроссовки Nike Lebron XVIII Low", 
    "price": 9999,
    "imageUrl": "/img/8.jpeg"
    }
  
  ])


  const [cartOpened, setCartOpened]  = React.useState(false)


  return (
    <div className="wrapper clear">
     {cartOpened ? <Drawer  onClose={()=>setCartOpened(false)}/> : null} 
      <Headers onClickCart={()=>setCartOpened(true)}/>
      
  
      <div className="content p-40 ">
        <div className='d-flex  aline-center mb-40 justify-between'>
        <h1 >Все кроссовки</h1>
           <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text"  placeholder='Поиск...' />
           </div>
        </div>
        <div className='d-flex flex-wrap'>
          {items.map((obj)=>(
        <Card
        title={obj.name}
        price={obj.price}
        imageUrl={obj.imageUrl}
        onFavorite={()=>console.log('you clicked favorite')}
        onPlus={()=>console.log('you clicked plus')}
        />

          ))}

      </div>

      </div>
    </div>


  );
}

export default App;
