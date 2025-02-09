import { FaHeartbeat, FaTooth, FaEye, FaShieldAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

function ServiceCard({ icon, title, description, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="relative p-6">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-primary-100 dark:bg-primary-900/50 p-4 text-primary-600 dark:text-primary-400 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
            {icon}
          </div>
        </div>
        <h3 className="mb-3 text-center text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-white dark:from-gray-900 to-primary-50 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            {t('services.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={<FaHeartbeat className="text-3xl" />}
            title={t('services.medical')}
            description={t('services.medicalDesc')}
            image="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <ServiceCard
            icon={<FaTooth className="text-3xl" />}
            title={t('services.dental')}
            description={t('services.dentalDesc')}
            image="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <ServiceCard
            icon={<FaEye className="text-3xl" />}
            title={t('services.vision')}
            description={t('services.visionDesc')}
            image="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <ServiceCard
            icon={<FaShieldAlt className="text-3xl" />}
            title={t('services.accident')}
            description={t('services.accidentDesc')}
            image="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
}