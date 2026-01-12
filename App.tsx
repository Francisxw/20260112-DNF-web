import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import GachaPage from './pages/GachaPage';
import GamePage from './pages/GamePage';
import CommunityPage from './pages/CommunityPage';
import FigureGalleryPage from './pages/FigureGalleryPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/community" element={<CommunityPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/gacha" element={<GachaPage />} />
          <Route path="/minigame" element={<GamePage />} />
          <Route path="/figures" element={<FigureGalleryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;