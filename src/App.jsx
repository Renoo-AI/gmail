import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Gmail = lazy(() => import('./pages/Gmail'));
const YouTube = lazy(() => import('./pages/YouTube'));
const Facebook = lazy(() => import('./pages/Facebook'));
const WhatsApp = lazy(() => import('./pages/WhatsApp'));
const YouTubeMusic = lazy(() => import('./pages/YouTubeMusic'));
const GitHub = lazy(() => import('./pages/GitHub'));
const EpsonLanding = lazy(() => import('./pages/EpsonLanding'));
const Admin = lazy(() => import('./pages/Admin'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gmail" element={<Gmail />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/whatsapp" element={<WhatsApp />} />
          <Route path="/musicyoutube" element={<YouTubeMusic />} />
          <Route path="/github" element={<GitHub />} />
          <Route path="/epson" element={<EpsonLanding />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
