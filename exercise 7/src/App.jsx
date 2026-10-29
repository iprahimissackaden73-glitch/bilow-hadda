import React, { useState } from "react";

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <p>
        mouse: X: <span>{mousePosition.x}</span>
      </p>
      <p>
        {" "}
        mouse: Y: <span>{mousePosition.y}</span>
      </p>
    </div>
  );
}

export default MouseTracker;
