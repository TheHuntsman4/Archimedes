import './App.css';
import { Header, About, Categories, Footer } from './components';
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
    <Footer />
    </div>
  );
}

export default App;
