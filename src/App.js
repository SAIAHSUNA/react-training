import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Products/home';
import ProductList from './Components/Products/Product-List';
import AddProduct from './Components/Products/Add-Product';
import Header from './Components/Products/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product-list' element={<ProductList />}></Route>
          <Route path='/add-product' element={<AddProduct />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
