import ArticleCard from './articleCard';

export default function RemainingGrid({ items = [] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="home__grid">
      {items.map((article) => (
        <ArticleCard key={article.sys.id} article={article} />
      ))}
    </div>
  );
}
