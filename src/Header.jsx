import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center 
        bg-gradient-to-r from-orange-600 to-orange-500 shadow-md rounded-b-2xl relative">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo del Hotel"
            className="w-12 h-12 object-contain rounded-full shadow bg-white"
          />
        </div>

        {/* Nombre del hotel (centro con cursiva) */}
        <h1 
          className="absolute left-1/2 transform -translate-x-1/2 
          text-white text-3xl md:text-4xl drop-shadow-md italic"
        >
          Mi Bello Florián
        </h1>

        {/* Botón menú (hamburguesa siempre visible) */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menú hamburguesa desplegable */}
      {open && (
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 
        shadow-md rounded-b-2xl mx-4 mt-1 py-6 flex flex-col items-center gap-6 text-white font-medium text-lg">
          <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#habitaciones" onClick={() => setOpen(false)}>Habitaciones</a>
          <a href="#resenas" onClick={() => setOpen(false)}>Reseñas</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
          <Link
            to="/reservar"
            onClick={() => setOpen(false)}
            className="bg-white text-orange-600 py-2 px-8 rounded-full font-semibold shadow-md hover:bg-orange-100"
          >
            Reservar ahora
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
