import logo from './logo.svg';
import './App.css';
import {BookCard, Header, Landing, Categories } from './components';
import NavBar  from './components/NavBar';
function App() {
  return (
    <div className="App">
        {/* { <><NavBar /><Header /></> } */}
        <Categories />

    </div>
  );
}

export default App;
