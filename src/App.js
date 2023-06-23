import React from 'react';
import axios from 'axios'
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
  const [searchValue, setSearchValue]  = React.useState('')

  

  React.useEffect(()=>{
   
  axios.get('https://64933a8c428c3d2035d18864.mockapi.io/items').then((res) =>{
    setItems(res.data)
    axios.get('https://64933a8c428c3d2035d18864.mockapi.io/cart').then((res) =>{
      setCartItems(res.data)
  
  })

})
  },[])


  const onAddToCard = (obj)=>{

    axios.post('https://64933a8c428c3d2035d18864.mockapi.io/cart',obj)

     setCartItems(prev =>[...prev,obj]) 
     
     console.log(cartItems)
    }

    const onRemoveItem = (id)=>{
      axios.delete(`https://64933a8c428c3d2035d18864.mockapi.io/cart/${id}`)

    //  setCartItems(prev =>[...prev,obj])      
    }

    const onChangeSearchInput = (event)=>{
        console.log(event.target.value)
        setSearchValue( event.target.value)
    }



  return (
    <div className="wrapper clear">
     {cartOpened ? <Drawer items={cartItems} onClose={()=>setCartOpened(false)}/> : null} 
      <Headers onClickCart={()=>setCartOpened(true)}/>
      
  
      <div className="content p-40 ">
        <div className='d-flex  aline-center mb-40 justify-between'>
        <h1 >{searchValue? `Поиск по запросу:"${searchValue}"`: 'Все кросовки'}</h1>
           <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            { searchValue && <img onClick={()=>setSearchValue('')} className='clear cu-p'src="/img/btn-remove.svg" alt="clear" />}
            <input onChange={onChangeSearchInput} type="text" value={searchValue } placeholder='Поиск...' />
           </div>
        </div>
        <div className='d-flex flex-wrap'>
          {items.filter((item)=>item.title.toLowerCase().includes(searchValue)).map((item)=>(
        <Card
        key={item.price}
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
