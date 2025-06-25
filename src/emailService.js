import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_1jdyvs8";
const TEMPLATE_ID = "template_0p5ao8v";
const PUBLIC_KEY = "NulviYwX7F7WU-Hjq"; 

export const enviarCorreoConfirmacion = async (
  email,
  nombre,
  habitacion,
  telefono,
  ciudad,
  ocupacion,
  fecha_entrada,
  fecha_salida,
  estado
) => {
  const templateParams = {
    nombre,
    email,
    habitacion,
    telefono,
    ciudad,
    ocupacion,
    fecha_entrada,
    fecha_salida,
    estado,
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log("Correo enviado exitosamente ✅");
  } catch (error) {
    console.error("❌ Error al enviar correo:", error);
  }
};
