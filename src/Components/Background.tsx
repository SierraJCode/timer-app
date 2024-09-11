import { useEffect, useState } from "react";
import "../Css/Background.css";

const Background = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveFactor = 20;
      const x = (e.clientX - window.innerWidth / 2) / moveFactor;
      const y = (e.clientY - window.innerHeight / 2) / moveFactor;
      setPosition({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="background"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s ease-out", // Para hacer la transición más suave
      }}
    >
      {/* Contenido de tu componente */}
      <h1>Movimiento con el mouse</h1>
    </div>
  );
};

export default Background;
