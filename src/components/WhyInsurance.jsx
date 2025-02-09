import { useLanguage } from '../context/LanguageContext';

export function WhyInsurance() {
  const { t } = useLanguage();

  return (
    <section id="importancia" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('why.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-primary-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-400 mb-3">
                {t('why.financial.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('why.financial.description')}
              </p>
            </div>
            <div className="bg-primary-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-400 mb-3">
                {t('why.preventive.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('why.preventive.description')}
              </p>
            </div>
            <div className="bg-primary-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-400 mb-3">
                {t('why.peace.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('why.peace.description')}
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt={t('why.image.alt')}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}