import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { enviarCorreoConfirmacion } from "./emailService";
import { toast } from "react-hot-toast";

function Dashboard() {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [reservaEditando, setReservaEditando] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchReservas();
  }, []);

  const fetchReservas = async () => {
    const { data, error } = await supabase
      .from("reservas")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("❌ Error al cargar reservas:", error.message);
    } else {
      setReservas(data);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  const eliminarReserva = async (id) => {
    const confirmacion = window.confirm("¿Eliminar esta reserva?");
    if (!confirmacion) return;

    const { error } = await supabase.from("reservas").delete().eq("id", id);
    if (error) {
      alert("❌ Error al eliminar.");
    } else {
      alert("✅ Eliminada.");
      fetchReservas();
    }
  };

  const iniciarEdicion = (reserva) => {
    setReservaEditando(reserva.id);
    setFormData({ ...reserva });
  };

  const guardarEdicion = async () => {
    const { error } = await supabase
      .from("reservas")
      .update(formData)
      .eq("id", reservaEditando);

    if (error) {
      alert("❌ Error al guardar");
    } else {
      alert("✅ Reserva actualizada");
      setReservaEditando(null);
      fetchReservas();
    }
  };

  const confirmarReserva = async (id) => {
    const reserva = reservas.find((r) => r.id === id);
    const { error } = await supabase
      .from("reservas")
      .update({ estado: "confirmada" })
      .eq("id", id);

    if (error) {
      alert("❌ Error al confirmar la reserva");
    } else {
      toast.success("✅ Reserva confirmada");
      await enviarCorreoConfirmacion(reserva.email, reserva.nombre, reserva.habitacion);
      fetchReservas();
    }
  };

  const exportarCSV = () => {
    const encabezados = [
      "Nombre",
      "Identificación",
      "Email",
      "Teléfono",
      "Ciudad",
      "Ocupación",
      "Entrada",
      "Salida",
      "Habitación",
      "Estado",
    ];
    const filas = reservas.map((r) => [
      r.nombre,
      r.identificacion,
      r.email,
      r.telefono,
      r.ciudad,
      r.ocupacion,
      r.fecha_entrada,
      r.fecha_salida,
      r.habitacion,
      r.estado,
    ]);
    const csvContent = [
      [encabezados, ...filas].map((e) => e.join(",")).join("\n")
    ];

    const blob = new Blob(csvContent, { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "reservas.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const reservasFiltradas = reservas.filter((r) =>
    r.identificacion?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-green-800">📋 Panel de Reservas</h2>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="flex justify-between items-center mb-4 gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Buscar por cédula..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full max-w-xs"
          />
          <button
            onClick={exportarCSV}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            📥 Exportar CSV
          </button>
        </div>

        {loading ? (
          <p className="text-gray-600">⏳ Cargando reservas...</p>
        ) : reservasFiltradas.length === 0 ? (
          <p className="text-gray-600">No hay reservas coincidentes.</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow rounded-xl">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="p-3">Nombre</th>
                  <th className="p-3">Cédula</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Teléfono</th>
                  <th className="p-3">Ciudad</th>
                  <th className="p-3">Ocupación</th>
                  <th className="p-3">Entrada</th>
                  <th className="p-3">Salida</th>
                  <th className="p-3">Habitación</th>
                  <th className="p-3">Estado</th>
                  <th className="p-3">Acción</th>
                </tr>
              </thead>
              <tbody>
                {reservasFiltradas.map((r) => (
                  <tr key={r.id} className="border-b hover:bg-green-50">
                    <td className="p-3">{r.nombre}</td>
                    <td className="p-3">{r.identificacion}</td>
                    <td className="p-3">{r.email}</td>
                    <td className="p-3">{r.telefono}</td>
                    <td className="p-3">{r.ciudad}</td>
                    <td className="p-3">{r.ocupacion}</td>
                    <td className="p-3">{r.fecha_entrada}</td>
                    <td className="p-3">{r.fecha_salida}</td>
                    <td className="p-3">{r.habitacion}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-white text-xs ${r.estado === 'confirmada' ? 'bg-green-600' : 'bg-orange-500'}`}>
                        {r.estado || 'pendiente'}
                      </span>
                    </td>
                    <td className="p-3 flex gap-2 flex-col">
                      <button
                        onClick={() => confirmarReserva(r.id)}
                        className="text-green-600 hover:underline"
                      >
                        Confirmar
                      </button>
                      <button
                        onClick={() => iniciarEdicion(r)}
                        className="text-blue-600 hover:underline"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => eliminarReserva(r.id)}
                        className="text-red-600 hover:underline"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {reservaEditando && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-green-700">Editar Reserva</h2>
            <div className="grid gap-4">
              {["nombre", "identificacion", "email", "telefono", "ciudad", "ocupacion", "fecha_entrada", "fecha_salida", "habitacion", "estado"].map((campo) => (
                <input
                  key={campo}
                  type={campo.includes("fecha") ? "date" : "text"}
                  value={formData[campo] || ""}
                  onChange={(e) => setFormData({ ...formData, [campo]: e.target.value })}
                  placeholder={campo}
                  className="border p-2 rounded"
                />
              ))}
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setReservaEditando(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={guardarEdicion}
                className="bg-green-700 text-white px-4 py-2 rounded"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dashboard;
