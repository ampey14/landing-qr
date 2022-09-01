
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Activities from './components/Activities';
import Products from './components/Products';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Activities /> 
      <About />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
