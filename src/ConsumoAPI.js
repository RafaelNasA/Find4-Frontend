
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MinhaComponente = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/destino')  
      .then(response => setDestinos(response.data))
      .catch(error => console.error('Erro:', error));
  }, []); 

  return (
    <div>
      <h1>Destinos da Agência</h1>
      <ul>
        {destinos.map(destino => (
          <li key={destino.id}>{destino.origem} - {destino.destino}</li>
        ))}
      </ul>
    </div>
  );
};

export default MinhaComponente;
