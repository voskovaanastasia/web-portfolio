import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';
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
          <Route path="/project/:id" element={<ProjectPage />} />
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
