import React from 'react';
import { Link } from 'react-router-dom';
import dispositivosData from '../components/DispositivosData';

function Dispositivos() {
  return (
    <div>
      <div className='background-image background-image-Dispositivos'></div>
      <div className='background-rectangle-biomat'>
       <h1 className="items-center font-bold font-serif text-6xl my-4">Dispositivos</h1>
      </div>      
      <div className='cuadricula-container'>
      <div className="cuadricula">
        {dispositivosData.map((dispositivo) => (
          <Link key={dispositivo.id} to={`/dispositivos/${dispositivo.id}`}>
            <div className="cuadricula-background">
              <h2 className="font-bold font-serif text-xl ">{dispositivo.name}</h2>
              <img src={dispositivo.image} alt={dispositivo.name} width={dispositivo.width} height={dispositivo.height} className='imagen-cuadricula'/>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Dispositivos;