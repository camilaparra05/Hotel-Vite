import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function Resenas() {
  const [resenas, setResenas] = useState([]);
  const [nueva, setNueva] = useState({ autor: "", comentario: "", calificacion: 5 });
  const [index, setIndex] = useState(0);

  const fetchResenas = async () => {
    const { data, error } = await supabase
      .from("resenas")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setResenas(data);
  };

  useEffect(() => {
    fetchResenas();
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % resenas.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [resenas.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nueva.autor || !nueva.comentario) return alert("Completa todos los campos.");
    const { error } = await supabase.from("resenas").insert([nueva]);
    if (error) {
      alert("❌ Error al enviar reseña.");
      console.error(error);
    } else {
      alert("✅ ¡Gracias por tu reseña!");
      setNueva({ autor: "", comentario: "", calificacion: 5 });
      fetchResenas();
    }
  };

  const visibles = resenas.slice(index, index + 3);

  return (
    <section id="resenas" className="bg-orange-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-10 font-[Playfair Display]">
          ⭐ Opiniones de nuestros huéspedes
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visibles.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-orange-200 border border-orange-100 transition">
              <p className="text-gray-700 italic mb-3">“{r.comentario}”</p>
              <p className="text-orange-800 font-semibold">— {r.autor}</p>
              <p className="text-yellow-500 text-lg">{r.calificacion} ⭐</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl grid gap-5 border border-orange-200"
        >
          <h3 className="text-2xl font-bold text-orange-600">Deja tu reseña ✍️</h3>

          <input
            type="text"
            placeholder="Tu nombre"
            value={nueva.autor}
            onChange={(e) => setNueva({ ...nueva, autor: e.target.value })}
            className="p-3 border border-orange-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            required
          />

          <textarea
            placeholder="Cuéntanos tu experiencia..."
            value={nueva.comentario}
            onChange={(e) => setNueva({ ...nueva, comentario: e.target.value })}
            className="p-3 border border-orange-200 rounded-md resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            rows="4"
            required
          />

          <select
            value={nueva.calificacion}
            onChange={(e) => setNueva({ ...nueva, calificacion: parseInt(e.target.value) })}
            className="p-3 border border-orange-200 rounded-md shadow-sm"
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>
                {n} ⭐
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 text-white py-3 rounded-md font-semibold transition"
          >
            Enviar reseña
          </button>
        </form>
      </div>
    </section>
  );
}

export default Resenas;
