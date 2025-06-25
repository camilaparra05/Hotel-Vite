function VideoIntro() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-700 mb-6">
          🎥 Conoce nuestro hotel
        </h2>
        <p className="text-gray-700 mb-8">
          Mira este video para sumergirte en la experiencia de Mi Bello Florián.
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-96 rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/TU_ENLACE_AQUI"
            title="Video Hotel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default VideoIntro;
