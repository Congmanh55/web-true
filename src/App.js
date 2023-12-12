import logo from './logo.svg';
import './App.css';
import RouterNav from './Component/router/RouterNav';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Component/app/Nav/Nav';
import Footer from './Component/app/Footer/Footer';
import About from './Component/app/About/About';
import Product from './Component/app/Product/Product';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <RouterNav/>
        {/* <About/> */}
        {/* <Product/> */}
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
