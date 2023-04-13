import './App.css';
import {BookCard, Header, Landing, Categories } from './components';
import NavBar  from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatGPT from './components/chatgpt';
function App() {
  return (
    <div className="App">
        <>
        <NavBar />
        <Routes >
        <Route path='/' element={<Header />} />
        <Route path="/gpt" element={<ChatGPT />} />
        <Route path='/categories' element={<Categories />} />
        </Routes>
    </>
    </div>
  );
}

export default App;
