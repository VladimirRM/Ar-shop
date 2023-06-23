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
  const [items,setItems] = React.useState([])
  const [cartOpened, setCartOpened]  = React.useState(false)
  const [cartItems, setCartItems]  = React.useState([])
  const [searchValue, setSearchValue]  = React.useState([])

  

  React.useEffect(()=>{
    fetch('https://64933a8c428c3d2035d18864.mockapi.io/items').then((res) =>{
      return res.json()
      .then(json => setItems(json))
})
  },[])

  const onAddToCard = (obj)=>{
     setCartItems(prev =>[...prev,obj]) 
     
     console.log(cartItems)
    }



  return (
    <div className="wrapper clear">
     {cartOpened ? <Drawer items={cartItems} onClose={()=>setCartOpened(false)}/> : null} 
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
          {items.map((item)=>(
        <Card
        key={item.title}
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
        onFavorite={()=>console.log('you clicked favorite')}
        onPlus={(obj)=>onAddToCard(obj)}
        />

          ))}

      </div>

      </div>
    </div>


  );
}

export default App;
