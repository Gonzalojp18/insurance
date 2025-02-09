import { FaHeartbeat, FaShieldAlt, FaUserMd, FaHandHoldingMedical } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import foto from '../assets/maye.png'

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-[100vh] pt-20 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-primary-200">
        <FaHeartbeat className="w-16 h-16 opacity-30" />
      </div>
      <div className="absolute bottom-20 left-10 text-primary-200">
        <FaShieldAlt className="w-12 h-12 opacity-30" />
      </div>
      <div className="absolute top-40 left-20 text-primary-200">
        <FaUserMd className="w-10 h-10 opacity-30" />
      </div>
      <div className="absolute bottom-40 right-20 text-primary-200">
        <FaHandHoldingMedical className="w-14 h-14 opacity-30" />
      </div>

      <div className="container mx-auto h-full px-4 md:px-6 py-12 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-2">
              <h1 className="name-title text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white leading-none">
                {t('hero.greeting')} Mayerling
                <span className="block mt-2">Rodriguez</span>
              </h1>
              <div className="h-1 w-32 bg-primary-500 mt-4"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <FaHeartbeat className="text-primary-500 text-2xl mb-2" />
                <h3 className="font-semibold text-gray-800 dark:text-white">{t('hero.integral')}</h3>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <FaShieldAlt className="text-primary-500 text-2xl mb-2" />
                <h3 className="font-semibold text-gray-800 dark:text-white">{t('hero.protection')}</h3>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-semibold">
              {t('hero.role')}
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
              {t('hero.mission')}
            </p>
          </div>

          <div className="flex justify-center animate-fadeInUp">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-primary-200 dark:bg-primary-700 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob"></div>
              <div className="relative overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%]">
              <img
                  src={foto}
                  alt="Mayerling Rodriguez - Asesora de Seguros"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}