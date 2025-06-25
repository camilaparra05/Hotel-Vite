import { useState } from "react";
import { MessageCircle, X, Instagram, Facebook, Phone, PhoneCall } from "lucide-react";

function ContactoFlotante() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <div
        className={`transition-all duration-300 transform ${
          abierto ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        } bg-white rounded-2xl shadow-2xl border border-orange-200 mb-4 p-4 w-72 space-y-4`}
      >
        <a
          href="https://wa.me/573143802414"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-orange-700 hover:bg-orange-100 px-3 py-2 rounded-xl transition"
        >
          <Phone size={20} /> WhatsApp
        </a>
        <a
          href="tel:+573143802414"
          className="flex items-center gap-3 text-green-700 hover:bg-green-100 px-3 py-2 rounded-xl transition"
        >
          <PhoneCall size={20} /> Llamar
        </a>
        <a
          href="https://www.instagram.com/hotelmibelloflorian"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-pink-600 hover:bg-pink-100 px-3 py-2 rounded-xl transition"
        >
          <Instagram size={20} /> Instagram
        </a>
        <a
          href="https://www.facebook.com/hospedajemibelloflorian"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-blue-700 hover:bg-blue-100 px-3 py-2 rounded-xl transition"
        >
          <Facebook size={20} /> Facebook
        </a>
      </div>

      <button
        onClick={() => setAbierto(!abierto)}
        className="bg-orange-600 text-white p-4 rounded-full shadow-xl hover:bg-orange-500 hover:rotate-12 transition-all duration-300"
      >
        {abierto ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}

export default ContactoFlotante;
