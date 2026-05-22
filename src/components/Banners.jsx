import ArticleCard from './articleCard';

export default function Banners({ items = [] }) {
  if (!items || items.length === 0) return null;
  const first = items[0];
  const second = items[1] || null;
  return (
    <section className="home__banners">
      {first && <ArticleCard article={first} variant="h-banner" imageSide="left" />}
      {second && <ArticleCard article={second} variant="h-banner" imageSide="right" />}
    </section>
  );
}
