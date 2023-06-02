import './App.css';
import { Header, Categories, Footer } from './components';
import {About} from './pages';
import NavBar  from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <>
        <NavBar />
        <Routes >
        <Route path='/' element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path='/categories' element={<Categories />} />
        </Routes> 
    </>
    </div>
  );
}

export default App;
