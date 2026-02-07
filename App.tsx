import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Process } from './pages/Process';
import { Catalog } from './pages/Catalog';
import { Mentorship } from './pages/Mentorship';
import { Request } from './pages/Request';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
        <ScrollToTop />
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/process" element={<Process />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/mentorship" element={<Mentorship />} />
                <Route path="/request" element={<Request />} />
            </Routes>
        </Layout>
    </Router>
  );
};

export default App;
