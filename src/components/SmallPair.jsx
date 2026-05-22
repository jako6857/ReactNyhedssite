import ArticleCard from './articleCard';

export default function SmallPair({ items = [] }) {
  if (!items || items.length < 2) return null;
  return (
    <section className="home__small-pair small-pair">
      <ArticleCard article={items[0]} variant="small" />
      <ArticleCard article={items[1]} variant="small" />
    </section>
  );
}
