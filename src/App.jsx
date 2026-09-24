import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Lightbox from './components/Lightbox';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles/globals.css';

const FarsafeCase = lazy(() => import('./pages/FarsafeCase'));
const BartCase = lazy(() => import('./pages/BartCase'));
const CryptoWalletCase = lazy(() => import('./pages/CryptoWalletCase'));
const OnlineDoctorCase = lazy(() => import('./pages/OnlineDoctorCase'));
const CrmPlatformCase = lazy(() => import('./pages/CrmPlatformCase'));
const FitnessAppCase = lazy(() => import('./pages/FitnessAppCase'));
const OnlinePaymentsCase = lazy(() => import('./pages/OnlinePaymentsCase'));
const ShootCase = lazy(() => import('./pages/ShootCase'));
const TaxComplianceCase = lazy(() => import('./pages/TaxComplianceCase'));

// Routes whose hero uses the dotted body background; other pages sit on plain white.
const dottedHeroRoutes = ['/', '/about', '/projects'];

function Layout() {
  const { pathname } = useLocation();
  const onDots = dottedHeroRoutes.includes(pathname);

  return (
    <div className={`flex flex-col min-h-screen ${onDots ? '' : 'bg-white'}`}>
        <Navigation />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
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
        </Suspense>
        <Lightbox />
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
