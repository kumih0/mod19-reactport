// import './assets/css/styles.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
