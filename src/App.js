import './App.css';
import { Header, Categories, Footer, Search } from './components';
import {About, Home} from './pages';
import NavBar  from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <>
        <NavBar />
        <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path='/categories' element={<Categories />} />
        </Routes> 
    </>
    </div>
  );
}

export default App;
