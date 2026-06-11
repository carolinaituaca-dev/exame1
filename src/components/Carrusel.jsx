import React, { useState } from 'react';

export default function Carrusel({ imagenes }) {
  const [index, setIndex] = useState(0);

  const siguiente = () => setIndex((prev) => (prev + 1) % imagenes.length);
  const anterior = () => setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);

  return (
    <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
      <button onClick={anterior} className="btn btn-outline-dark fw-bold">◀</button>
      <div className="text-center">
        <img 
          src={imagenes[index]} 
          alt={`Mundial 2026 - Foto ${index + 1}`} 
          className="img-fluid border border-dark" 
          style={{ maxWidth: '320px', height: '200px', objectFit: 'cover' }} 
        />
        <p className="small mt-1 fw-semibold">Imagen {index + 1} de {imagenes.length}</p>
      </div>
      <button onClick={siguiente} className="btn btn-outline-dark fw-bold">▶</button>
    </div>
  );
}