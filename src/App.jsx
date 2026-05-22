import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import MobileCatBar from './components/MobileCatBar';
import Footer from './components/footer';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Alle');

  return (
    <BrowserRouter>
      <Navbar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <MobileCatBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <Routes>
        <Route path="/" element={<Home activeCategory={activeCategory} />} />
        <Route path="/artikel/:slug" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
