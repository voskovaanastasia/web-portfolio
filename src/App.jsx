import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import FarsafeCase from './pages/FarsafeCase';
import BartCase from './pages/BartCase';
import CryptoWalletCase from './pages/CryptoWalletCase';
import OnlineDoctorCase from './pages/OnlineDoctorCase';
import CrmPlatformCase from './pages/CrmPlatformCase';
import FitnessAppCase from './pages/FitnessAppCase';
import OnlinePaymentsCase from './pages/OnlinePaymentsCase';
import ShootCase from './pages/ShootCase';
import TaxComplianceCase from './pages/TaxComplianceCase';
import './styles/globals.css';

// Routes whose hero uses the dotted body background; other pages sit on plain white.
const dottedHeroRoutes = ['/', '/projects'];

function Layout() {
  const { pathname } = useLocation();
  const onDots = dottedHeroRoutes.includes(pathname);

  return (
    <div className={`flex flex-col min-h-screen ${onDots ? '' : 'bg-white'}`}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/farsafe" element={<FarsafeCase />} />
          <Route path="/project/bart" element={<BartCase />} />
          <Route path="/project/cryptowallet" element={<CryptoWalletCase />} />
          <Route path="/project/online-doctor" element={<OnlineDoctorCase />} />
          <Route path="/project/crm-platform" element={<CrmPlatformCase />} />
          <Route path="/project/fitness-app" element={<FitnessAppCase />} />
          <Route path="/project/online-payments" element={<OnlinePaymentsCase />} />
          <Route path="/project/shoot" element={<ShootCase />} />
          <Route path="/project/tax-compliance" element={<TaxComplianceCase />} />
        </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
