import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import Lightbox from './components/Lightbox';
import ScrollManager from './components/ScrollManager';
import About from './pages/About';
import Projects from './pages/Projects';
import useDocumentMeta from './hooks/useDocumentMeta';
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
// Preview-only page: not linked from anywhere, noindex, not in the sitemap.
const BuiltWithClaudeCase = lazy(() => import('./pages/BuiltWithClaudeCase'));

// Unknown URLs still get the SPA shell with a 200 from the host, so mark them noindex.
function NotFound() {
  useDocumentMeta({ title: 'Page not found — Anastasiia Voskova', robots: 'noindex, nofollow' });
  return (
    <main id="main-content" className="flex flex-col items-center gap-4 px-6 py-32 text-center">
      <h1 className="font-grotesk font-medium text-[26px] sm:text-4xl text-text-primary tracking-tight">Page not found</h1>
      <Link to="/" className="font-grotesk text-[14px] text-text-brand underline">Back to home</Link>
    </main>
  );
}

// Routes whose hero uses the dotted body background; other pages sit on plain white.
const dottedHeroRoutes = ['/', '/about', '/projects'];

function Layout() {
  const { pathname } = useLocation();
  const onDots = dottedHeroRoutes.includes(pathname);

  return (
    <div className={`flex flex-col min-h-screen ${onDots ? '' : 'bg-surface-default'}`}>
        <ScrollManager />
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
            <Route path="/project/built-with-claude" element={<BuiltWithClaudeCase />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Lightbox />
        <Analytics />
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
