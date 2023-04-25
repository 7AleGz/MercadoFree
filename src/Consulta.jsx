import React, { useState, useEffect } from "react"; // http://www.etr.gov.ar/style/js/acciones.js - ajax/cuandollega/getSmsResponseEfisat.php

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("ajax/cuandollega/getSmsResponseEfisat.php");
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        setError(error.message);
        console.log(error.message); // Imprime el error en la consola
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;