// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MapContainer from './components/MapContainer';

const App = () => {
  const [mapStyle, setMapStyle] = useState('mapbox://styles/mapbox/satellite-v9'); // Стиль по умолчанию

  const handleStyleChange = (newStyle) => {
    setMapStyle(newStyle); // Меняем стиль карты
    
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar handleStyleChange={handleStyleChange} />
      <MapContainer mapStyle={mapStyle} />
    </div>
  );
};

export default App;
