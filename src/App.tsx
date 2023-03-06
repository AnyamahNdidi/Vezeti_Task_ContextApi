import React from 'react';
import './App.css';
import Home from './components/Home';
import {IdataProvider} from "./components/UseContext/Global"

function App() {
  return (
    <IdataProvider>
       <div className="App">
        <Home/>
    </div>
    </IdataProvider>
   
  );
}

export default App;
