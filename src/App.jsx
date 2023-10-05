import React, { useState } from 'react';
import './App.css';
import Background from './components/background';

function App() {
  const [products,setProducts]=useState([
    {
      id:1,
      title:"Buy Banana",
      mount:5,
    },
    {
      id:2,
      title:"Buy Apple",
      mount:8,
    },
    {
      id:3,
      title:"Buy Ananas",
      mount:13,
    },
  ]);

  const dataHandler=(data)=>{
    setProducts([data,...products])
  }
  return (
    <div>
      <div>
        <Background dataHandler={dataHandler} data={products} setProducts={setProducts}/>
      </div>
    </div>
  );
}

export default App;
