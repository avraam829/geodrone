// src/components/Sidebar.jsx
import React from 'react';
import '../styles/Sidebar.css'; // Импортируем стили

const Sidebar = ({ handleStyleChange }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <button onClick={() => handleStyleChange('mapbox://styles/mapbox/satellite-v9')}>Спутник</button>
        <button onClick={() => handleStyleChange('mapbox://styles/mapbox/streets-v11')}>Схема</button>
        <button onClick={() => handleStyleChange('mapbox://styles/mapbox/outdoors-v11')}>3D рельеф</button>
      </div>
    </div>
  );
};

export default Sidebar;
