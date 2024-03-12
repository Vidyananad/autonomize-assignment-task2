
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsContainer from './productsContainer';
import './App.css';
import Details from './details';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ProductsContainer}/>
        <Route path='/product/:id' Component={Details}/>
      </Routes>
    </BrowserRouter>   
    </div> 
  );
}

export default App;
