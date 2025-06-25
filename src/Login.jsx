import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        onLogin();
      }
    });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const {date, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert("❌ Error al iniciar sesión");
    } else {
      onLogin();
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-orange-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">Iniciar Sesión</h2>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded"
          required
        />
        <button
          type="submit"


          className="w-full bg-orange-700 text-white py-3 rounded hover:bg-orange-600"
        >
          Ingresar 
        </button>
      </form>
    </section>

  );
}

export default Login;
