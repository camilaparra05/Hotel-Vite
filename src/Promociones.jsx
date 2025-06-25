import React from "react";
import { Gift } from "lucide-react";

function Promociones() {
  return (
    <section className="bg-orange-100 py-16 px-4" id="promociones">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
          <Gift className="inline-block w-8 h-8 mr-2 text-orange-600" />
          Promoción Especial
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Reserva ahora y obtén un 10% de descuento en tu primera estadía.
        </p>
        <a
          href="#reservar"
          className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Aprovecha la oferta
        </a>
      </div>
    </section>
  );
}

export default Promociones;
