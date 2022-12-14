import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import React, {useState,useEffect} from 'react';


function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <Header />
      <Home setSearch={setSearch}search={search}/>
    </div>
  );
}

export default App;
