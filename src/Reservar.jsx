import { useState } from "react";
import { supabase } from "./supabaseClient";
import { toast } from "react-hot-toast";
import { enviarCorreoConfirmacion } from "./emailService";


function Reservar() {
  const [formData, setFormData] = useState({
    nombre: "",
    identificacion: "",
    email: "",
    telefono: "",
    ciudad: "",
    ocupacion: "",
    fecha_entrada: "",
    fecha_salida: "",
    habitacion: "",
    estado: "pendiente",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validarFechas = () => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const entrada = new Date(formData.fecha_entrada);
    const salida = new Date(formData.fecha_salida);

    if (entrada < hoy || salida < hoy) {
      toast.error("⚠️ No puedes seleccionar fechas anteriores a hoy.");
      return false;
    }

    if (entrada > salida) {
      toast.error("⚠️ La fecha de entrada no puede ser posterior a la de salida.");
      return false;
    }

    return true;
  };

  const verificarDisponibilidad = async () => {
    const { data, error } = await supabase
      .from("reservas")
      .select("*")
      .eq("habitacion", formData.habitacion)
      .not("fecha_entrada", "gt", formData.fecha_salida)
      .not("fecha_salida", "lt", formData.fecha_entrada);

    if (error) {
      toast.error("❌ Error al verificar disponibilidad.");
      console.error(error);
      return false;
    }

    return data.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarFechas()) return;

    const disponible = await verificarDisponibilidad();
    if (!disponible) {
      toast.error("❌ La habitación ya está reservada para esas fechas.");
      return;
    }

    const { error } = await supabase.from("reservas").insert([formData]);

    if (error) {
      toast.error("❌ Error al reservar. Inténtalo de nuevo.");
      console.error(error);
    } else {
     await enviarCorreoConfirmacion(
  formData.email,
  formData.nombre,
  formData.habitacion,
  formData.telefono,
  formData.ciudad,
  formData.ocupacion,
  formData.fecha_entrada,
  formData.fecha_salida,
  formData.estado
);


      toast.success("✅ ¡Reserva registrada con éxito!");

      const mensaje = encodeURIComponent(
        `Hola, soy ${formData.nombre}. He realizado una reserva del ${formData.fecha_entrada} al ${formData.fecha_salida} para la habitación ${formData.habitacion}. ¡Espero confirmación!`
      );

      setTimeout(() => {
        window.location.href = `https://wa.me/573143802414?text=${mensaje}`;
      }, 1000);

      setFormData({
        nombre: "",
        identificacion: "",
        email: "",
        telefono: "",
        ciudad: "",
        ocupacion: "",
        fecha_entrada: "",
        fecha_salida: "",
        habitacion: "",
        estado: "pendiente",
      });
    }
  };
  

  return (
    <section id="reservar" className="bg-orange-50 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center font-display">
          Reserva tu habitación
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-5">
          <input name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg shadow-sm" />
          <input name="identificacion" placeholder="Número de identificación" value={formData.identificacion} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg shadow-sm" />
          <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg shadow-sm" />
          <input name="telefono" placeholder="Número de contacto" value={formData.telefono} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg shadow-sm" />
          <input name="ciudad" placeholder="Ciudad de origen" value={formData.ciudad} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg shadow-sm" />
          <input name="ocupacion" placeholder="Número de personas (ocupación)" value={formData.ocupacion} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg shadow-sm" />

          <div className="grid grid-cols-2 gap-4">
            <input type="date" name="fecha_entrada" value={formData.fecha_entrada} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg shadow-sm" />
            <input type="date" name="fecha_salida" value={formData.fecha_salida} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg shadow-sm" />
          </div>

          <select name="habitacion" value={formData.habitacion} onChange={handleChange} required className="p-3 border border-gray-300 rounded-lg shadow-sm">
            <option value="">Selecciona una habitación</option>
            <optgroup label="Piso 1">
              <option value="101">101</option>
              <option value="102">102</option>
              <option value="103">103</option>
              <option value="104">104</option>
            </optgroup>
            <optgroup label="Piso 2">
              {Array.from({ length: 9 }, (_, i) => 201 + i).map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </optgroup>
            <optgroup label="Piso 3">
              {Array.from({ length: 10 }, (_, i) => 301 + i).map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </optgroup>
            <optgroup label="Piso 4">
              {Array.from({ length: 6 }, (_, i) => 401 + i).map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </optgroup>
          </select>

          <button type="submit" className="bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-500 transition shadow-md">
            Reservar ahora
          </button>
        </form>
      </div>
    </section>
  );
}

export default Reservar;
