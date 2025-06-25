import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png" // Asegúrate de colocar el archivo logo.png dentro de /public
            alt="Logo del Hotel"
            className="w-10 h-10 object-contain rounded-full"
          />
          <h1 className="text-2xl md:text-3xl font-title text-primary">
            Hotel Mi Bello Florián
          </h1>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#inicio" className="hover:text-green-600 transition">Inicio</a>
          <a href="#habitaciones" className="hover:text-green-600 transition">Habitaciones</a>
          <a href="#resenas" className="hover:text-green-600 transition">Reseñas</a>
          <a href="#contacto" className="hover:text-green-600 transition">Contacto</a>
          <a href="#reservar" className="hover:text-green-600 transition">Reservas</a>
        </nav>

        {/* Botón de reserva */}
       <Link
  to="/reservar"
  className="bg-orange-600 hover:bg-orange-500 text-white py-3 px-6 rounded-full font-semibold transition"
>
  Reservar ahora
</Link>

      </div>
    </header>
  );
}

export default Header;
