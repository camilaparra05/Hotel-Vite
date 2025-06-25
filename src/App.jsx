import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

import Header from "./Header";
import Hero from "./Hero";
import Galeria from "./Galeria";
import Promociones from "./Promociones";
import Sostenibilidad from "./Sostenibilidad";
import VideoIntro from "./VideoIntro";
import Habitaciones from "./Habitaciones";
import Resenas from "./Resenas";
import Contacto from "./Contacto";
import Mapa from "./Mapa";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data?.user ?? null);
  };

  return (
    <div className="pt-20 bg-orange-50 min-h-screen font-sans">
      <Header />
      <Hero />
      <VideoIntro />
      <Galeria />
      <Promociones />
      <Sostenibilidad />
      <Habitaciones />
      <Resenas />
      <Contacto />
      <Mapa />

      {/* 👇 Panel privado solo para admin */}
      {user && <Dashboard />}

      {/* 👇 Login solo si no ha iniciado sesión */}
      {!user && <Login onLogin={checkUser} />}
    </div>
  );
}

export default App;
