import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Imagen que conserva su tamaño original */}
      <img
        src="/hero-bg.jpeg"
        alt="Fondo del hotel"
        className="mx-auto w-auto h-auto relative z-0"
        style={{ display: "block" }}
      />

      {/* Capa blanca translúcida encima de la imagen */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-10 pointer-events-none"></div>

      {/* Contenido sobre la imagen */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-orange-800 mb-4">
          Hotel Mi Bello Florián
        </h1>
        <p className="text-lg text-orange-900 mb-6 max-w-xl">
          Naturaleza, comodidad y experiencias inolvidables en Santander 🌄
        </p>
<Link
  to="/reservar"
  className="bg-orange-600 hover:bg-orange-500 text-white py-3 px-6 rounded-full font-semibold transition"
>
  Reservar ahora
</Link>

      </div>
    </section>
  );
}

export default Hero;
