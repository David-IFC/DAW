import React from "react";

import "./style.css"; // Tu CSS existente

import Balatro from './components/Balatro/Balatro';
  
<Balatro
  isRotate={false}
  mouseInteraction={true}
  pixelFilter={700}
/>

function App() {
  return (
  <>
    <Balatro />
	</>
  );
}

export default App;