import { useLanguage } from '../context/LanguageContext';

export function InsuranceCompanies() {
  const { t } = useLanguage();

  return (
    <section id="aseguradoras" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('insurers.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ObamaCare */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
              src="/public/obama.PNG"
              alt="ObamaCare"
              className="h-16 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-white">ObamaCare</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {t('insurers.obamacare')}
            </p>
          </div>

          {/* Washington National */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
              src="/public/wash.PNG"
              alt="Washington National"
              className="h-16 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-white">Washington National</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {t('insurers.washington')}
            </p>
          </div>

          {/* Cigna */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
              src="/public/cig.PNG"
              alt="Cigna"
              className="h-16 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-white">Cigna</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {t('insurers.cigna')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}