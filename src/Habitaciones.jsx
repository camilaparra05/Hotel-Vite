import { useEffect, useState } from "react";

const habitaciones = [
  {
    nombre: "Suite Familiar",
    descripcion: "Perfecta para familias, con balcón y vista a la montaña.",
    precio: "$250.000 / noche",
    imagen: "https://source.unsplash.com/featured/?hotel,family-room",
  },
  {
    nombre: "Habitación Ecológica",
    descripcion: "Diseñada con materiales sostenibles y mucha luz natural.",
    precio: "$180.000 / noche",
    imagen: "https://source.unsplash.com/featured/?eco,room",
  },
  {
    nombre: "Deluxe con Jacuzzi",
    descripcion: "Lujo y relajación con jacuzzi privado y cama king.",
    precio: "$320.000 / noche",
    imagen: "https://source.unsplash.com/featured/?jacuzzi,luxury-room",
  },
];

function Habitaciones() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % habitaciones.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const habitacion = habitaciones[index];

  return (
    <section id="habitaciones" className="bg-orange-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-6">
          🛌 Nuestras Habitaciones
        </h2>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-xl mx-auto transition-transform duration-500 hover:scale-105">
          <img
            src={habitacion.imagen}
            alt={habitacion.nombre}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-orange-600 mb-2">
              {habitacion.nombre}
            </h3>
            <p className="text-gray-700 mb-3">{habitacion.descripcion}</p>
            <div className="flex justify-between items-center">
              <span className="text-orange-800 font-semibold">
                {habitacion.precio}
              </span>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habitaciones;
