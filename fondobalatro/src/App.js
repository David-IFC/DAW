import React from "react";
import Balatro from "./Balatro" // Fondo animado
import "./style.css"; // Tu CSS existente

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Balatro /> {/* Fondo animado */}
      
      {/* Contenido sobre el fondo */}
      <div className="contenido">
        <h1>Mi página con Balatro</h1>
        <p>Usando React y React Bits</p>
      </div>
    </div>
  );
}

export default App;