import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  const handleEmailClick = () => {
    window.location.href = 'mailto:mayerling.rodriguez@example.com';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa obtener información sobre seguros.\n\n" +
      "Por favor, ayúdame completando la siguiente información:\n\n" +
      "1. Nombre completo:\n" +
      "2. Tipo de seguro que necesitas (Médico/Dental/Visión):\n" +
      "3. Mejor horario para contactarte:\n\n" +
      "Me comunicaré contigo lo antes posible para brindarte la mejor asesoría personalizada."
    );
    window.location.href = `https://wa.me/+584123818640?text=${message}`;
  };


  return (
    <section id="contacto" className="py-20 bg-primary-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('contact.title')}
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t('contact.subtitle')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="text-2xl" />
              {t('contact.whatsapp')}
            </button>
            <button
              onClick={handleEmailClick}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 dark:bg-primary-700 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-800 transition-colors"
            >
              <FaEnvelope className="text-2xl" />
              {t('contact.email')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}