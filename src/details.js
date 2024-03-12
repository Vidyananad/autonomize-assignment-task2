import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './App.css'

const Details =  ({ product }) => {
    const [productdata, setProductData] = useState([]);
    const {id} = useParams()
    const url = `https://fakestoreapi.com/products/${id}`;

    useEffect(()=>{
      fetch(url)
       .then(res=>res.json()).then(data => setProductData(data))
     },[url])

    return (
      <div>
        <div>
          <h3>{productdata.title}</h3>
          <img className='image' src={productdata.image} alt={productdata.title}/>
          <p>price: ${productdata.price}</p>
          <p>{productdata.description}</p>
          </div>
      </div>
    );
  };
  
export default Details;
