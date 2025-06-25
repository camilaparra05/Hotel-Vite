function Mapa() {
  return (
    <section id="mapa" className="py-16 px-4 bg-[#fffaf0]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#d97706] mb-6">📍 Encuéntranos</h2>
        <p className="mb-6 text-gray-700">
          Estamos ubicados en el corazón de Florián, rodeados de naturaleza y tranquilidad. ¡Ven a conocernos!
        </p>
        <div className="rounded-xl overflow-hidden shadow-lg border border-orange-300">
          <iframe
            title="Ubicación Hotel Mi Bello Florián"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.3715887734024!2d-73.9713635!3d5.803081400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e41bdced3132a9f%3A0x798a7b977ccb3da9!2sHotel%20Mi%20Bello%20Flori%C3%A1n!5e0!3m2!1ses-419!2sco!4v1749060083732!5m2!1ses-419!2sco"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Mapa;
