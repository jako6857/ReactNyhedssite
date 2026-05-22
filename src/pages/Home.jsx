import { useState, useEffect } from 'react';
import { getArticles } from '../lib/contentful';
import ArticleCard from '../components/articleCard';
import FeaturedBanner from '../components/FeaturedBanner';
import Mosaic from '../components/Mosaic';
import Banners from '../components/Banners';
import SmallPair from '../components/SmallPair';
import RemainingGrid from '../components/RemainingGrid';
import './Home.css';

export default function Home({ activeCategory }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getArticles(activeCategory)
      .then(setArticles)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [activeCategory]);

  if (loading) return <div className="home__status">Henter nyheder…</div>;
  if (error) return <div className="home__status home__status--error">Fejl: {error}</div>;
  if (!articles.length) return <div className="home__status">Ingen artikler fundet.</div>;

  // Fremhævet artikel
  const [featured, ...restAll] = articles;
  const rest = restAll;

  const renderBlocks = () => {
    const nodes = [];
    let i = 0;
    const total = rest.length;

    while (i < total) {
      if (i + 4 <= total) {
        // Mosaik 4-stk
        nodes.push(<Mosaic items={rest.slice(i, i + 4)} key={`mosaic-${i}`} />);
        i += 4;
      } else {
        break;
      }

      if (i < total) {
        // Vandrette bannere
        nodes.push(<Banners items={rest.slice(i, i + 2)} key={`banners-${i}`} />);
        i += Math.min(2, total - i);
      }

      if (i + 2 <= total) {
        // To små artikler
        nodes.push(<SmallPair items={rest.slice(i, i + 2)} key={`small-${i}`} />);
        i += 2;
      } else {
        break;
      }
    }

    if (i < total) {

      nodes.push(<RemainingGrid items={rest.slice(i)} key={`remaining-${i}`} />);
    }

    return nodes;
  };

  return (
    <main className="home">
      {featured && <FeaturedBanner article={featured} />}

      {renderBlocks()}
    </main>
  );
}
