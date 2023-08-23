import React from 'react';
import { useState, useEffect } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
console.log("el componente se monto");

  },[]);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};
export default Contador;
