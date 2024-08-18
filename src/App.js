
import './App.css';
import prducts from './data';
function App() {
 
  const productList = prducts.map((product)=>{
          
    return (
      <div className= 'item-container'>
    <img height={300} width={200} src={product.image} alt="product"/>
    <h3>{product.title}</h3>
    <p>{product.price}</p>
  </div>
  )})
  return (
    
    
        <div className="App">
      <header className="App-header">
        <div>
        <h1>MAMA'S BAKERY</h1>
        <p>Freshly made</p>
        </div>
        <div>
          <img className="image" src="https://img.freepik.com/free-vector/outside-bakery-shop-background_1308-122413.jpg" alt="Bakery"/>
        </div>
        <div className='item-section'>
        {/* <div className= 'item-container'>
          <img height={300} width={200} src={prducts[0].image} alt="croissant"/>
          <h3>{prducts[0].title}</h3>
          <p>{prducts[0].price}</p>
        </div>
        <div className='item-container'>
          <img  height={300} width={200}  src={prducts[1].image} alt="cookie"/>
        
        <h3>{prducts[1].title}</h3>
        <p>{prducts[1].price}</p>
        </div> */}
        {/* {prducts.map((product)=>{
          
          return (
            <div className= 'item-container'>
          <img height={300} width={200} src={product.image} alt="product"/>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
        )})
        } */}
         {productList}
         
        </div>
      </header>
    </div>
  );
}

export default App;
