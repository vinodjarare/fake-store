import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import {Routes,Route} from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Product from './component/Product';
import Footer from './component/Footer';


function App() {
  return (
    <>
     <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
