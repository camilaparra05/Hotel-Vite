// src/Sostenibilidad.jsx
import Slider from "react-slick";
import { Leaf, Recycle, Sun } from "lucide-react";

function Sostenibilidad() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const items = [
    {
      icon: <Leaf className="text-orange-600 w-8 h-8 mb-3" />,
      title: "Energía limpia",
      text: "Paneles solares que abastecen nuestras instalaciones.",
    },
    {
      icon: <Recycle className="text-orange-600 w-8 h-8 mb-3" />,
      title: "Reciclaje",
      text: "Reducción de plásticos y reciclaje activo.",
    },
    {
      icon: <Sun className="text-orange-600 w-8 h-8 mb-3" />,
      title: "Turismo responsable",
      text: "Apoyamos comunidades locales y cuidamos la naturaleza.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-8">
          🌱 Sostenibilidad
        </h2>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 p-6 rounded-xl shadow-md mx-2"
            >
              {item.icon}
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Sostenibilidad;
