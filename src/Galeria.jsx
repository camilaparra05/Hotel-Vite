import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Galeria() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 segundos
    arrows: true,
  };

  return (
    <section id="galeria" className="py-16 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-6">
          📸 Galería del Hotel
        </h2>
        <p className="text-gray-600 mb-10">
          Mira algunas de las imágenes de nuestras cómodas instalaciones.
        </p>

        <Slider {...settings}>
          <div>
            <img
              src="/images/habitacion1.jpg"
              alt="Habitación 1"
              className="w-full h-96 object-cover rounded-xl shadow"
            />
          </div>
          <div>
            <img
              src="/images/habitacion2.jpg"
              alt="Habitación 2"
              className="w-full h-96 object-cover rounded-xl shadow"
            />
          </div>
          <div>
            <img
              src="/images/baño.jpg"
              alt="Baño"
              className="w-full h-96 object-cover rounded-xl shadow"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Galeria;
