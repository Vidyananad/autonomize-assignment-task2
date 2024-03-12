import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Details from './details'
import './App.css'


const ProductsContainer = ()=>{
  const [data, setData] = useState([])

 useEffect(()=>{
  fetch('https://fakestoreapi.com/products/')
   .then(res=>res.json()).then(data => setData(data))
 },[])


  return (
    <div className="App">
      <div>
         <h1 style={{textAlign: 'center'}}>Products</h1>
      </div>
      <div className='all-products-container'>
      {data.map(product =>
      <div key={product.id}>
       <Link to={`product/${product.id}`}><div className="individual-product-container" onclick={()=> {<Details product={product}/>}}>
          <h3>{product.title}</h3>
          <img src={product.image} className='image' alt={product.title}/>
          <p>Price: ${product.price}</p>
        </div>
        </Link>  
      </div>
      )}
       </div>
      </div>
  );
}
export default ProductsContainer