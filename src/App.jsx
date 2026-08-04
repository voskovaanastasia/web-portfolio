import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import FarsafeCase from './pages/FarsafeCase';
import BartCase from './pages/BartCase';
import CryptoWalletCase from './pages/CryptoWalletCase';
import OnlineDoctorCase from './pages/OnlineDoctorCase';
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
