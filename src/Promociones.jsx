import React from "react";
import { Gift } from "lucide-react";

function Promociones() {
  return (
    <section className="bg-orange-100 py-16 px-4" id="promociones">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
          <Gift className="inline-block w-8 h-8 mr-2 text-orange-600" />
          NO TE QUEDES SIN TU RESERVA
        </h2>
    
        <a
          href="#reservar"
          className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Reserva Ahora.
        </a>
      </div>
    </section>
  );
}

export default Promociones;
