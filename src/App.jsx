import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { InsuranceCompanies } from './components/InsuranceCompanies';
import { WhyInsurance } from './components/WhyInsurance';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navigation />
      <Hero />
      <Services />
      <InsuranceCompanies />
      <WhyInsurance />
      <Contact />
    </div>
  );
}

export default App;