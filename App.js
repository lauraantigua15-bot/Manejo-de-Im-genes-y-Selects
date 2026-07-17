import React, { useState } from 'react';
import bannerImg from './assets/banner.jpg';
import fotoImg from './assets/foto.jpg';

const opciones = {
  "Sistemas": ["Programación", "Bases de Datos", "Redes"],
  "Diseño": ["UI/UX", "Ilustración", "Edición de Video"],
  "Negocios": ["Marketing", "Finanzas", "Administración"]
};

function App() {
  const [categoria, setCategoria] = useState('');
  const [subcategoria, setSubcategoria] = useState('');

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
    setSubcategoria('');
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '500px' }}>
      <h2>Proyecto React - Manejo de Imágenes y Selects</h2>

      {/* SECCIÓN IMÁGENES */}
      <section style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h3>1. Imágenes desde src/assets</h3>
        
        <p><strong>Primera Imagen (Carro):</strong></p>
        <img src={bannerImg} alt="Carro" style={{ width: '100%', maxWidth: '300px', borderRadius: '5px' }} />

        <p><strong>Segunda Imagen (Camino):</strong></p>
        <img src={fotoImg} alt="Camino" style={{ width: '100%', maxWidth: '300px', borderRadius: '5px' }} />
      </section>

      {/* SECCIÓN SELECTS */}
      <section style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h3>2. Select Dependiente</h3>

        <div style={{ marginBottom: '15px' }}>
          <label>Área: </label>
          <select value={categoria} onChange={handleCategoriaChange}>
            <option value="">-- Selecciona un Área --</option>
            {Object.keys(opciones).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Especialidad: </label>
          <select 
            value={subcategoria} 
            onChange={(e) => setSubcategoria(e.target.value)}
            disabled={!categoria}
          >
            <option value="">
              {categoria ? '-- Selecciona Especialidad --' : '-- Primero elige un Área --'}
            </option>
            {categoria && opciones[categoria].map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        {categoria && subcategoria && (
          <p style={{ marginTop: '15px', color: 'green' }}>
            Seleccionaste: <strong>{categoria} ➔ {subcategoria}</strong>
          </p>
        )}
      </section>
    </div>
  );
}

export default App;
