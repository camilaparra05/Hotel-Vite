import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center 
        bg-gradient-to-r from-orange-600 to-orange-500 shadow-md rounded-b-2xl">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo del Hotel"
            className="w-12 h-12 object-contain rounded-full shadow bg-white"
          />
        </div>

        {/* Nombre del hotel (centro) */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-3xl font-bold italic tracking-wide">
          Mi Bello Florián
        </h1>

        {/* Navegación (desktop) */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#inicio" className="relative group">
            Inicio
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#habitaciones" className="relative group">
            Habitaciones
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#resenas" className="relative group">
            Reseñas
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#contacto" className="relative group">
            Contacto
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
        </nav>

        {/* Botón de reserva */}
        <Link
          to="/reservar"
          className="hidden md:inline-block bg-white text-orange-600 border-2 border-white 
          hover:bg-orange-100 transition-transform hover:scale-105 
          py-2 px-6 rounded-full font-semibold shadow-md"
        >
          Reservar ahora
        </Link>

        {/* Botón menú (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-orange-600 to-orange-500 
        shadow-md rounded-b-2xl mx-4 mt-1 py-4 flex flex-col items-center gap-4 text-white font-medium">
          <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#habitaciones" onClick={() => setOpen(false)}>Habitaciones</a>
          <a href="#resenas" onClick={() => setOpen(false)}>Reseñas</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
          <Link
            to="/reservar"
            onClick={() => setOpen(false)}
            className="bg-white text-orange-600 py-2 px-6 rounded-full font-semibold shadow-md"
          >
            Reservar ahora
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
