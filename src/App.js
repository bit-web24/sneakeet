import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    //   <div>
    //     <p>Hello</p>
    //   </div>
    //   <footer className='App-footer'>
    //   </footer>
    // </div>
    <>
    <Navbar />
    <ProductGrid />
    <Footer />
    </>
  );
}

export default App;
