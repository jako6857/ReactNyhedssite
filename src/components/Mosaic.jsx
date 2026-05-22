import ArticleCard from './articleCard';

export default function Mosaic({ items = [] }) {
  if (!items || items.length < 4) return null;
  const [a, b, c, d] = items;
  return (
    <section className="home__mosaic mosaic">
      <div className="mosaic__item mosaic__a">
        <ArticleCard article={a} variant="mosaic-large" />
      </div>
      <div className="mosaic__item mosaic__b">
        <ArticleCard article={b} variant="mosaic-small" />
      </div>
      <div className="mosaic__item mosaic__c">
        <ArticleCard article={c} variant="mosaic-small" />
      </div>
      <div className="mosaic__item mosaic__d">
        <ArticleCard article={d} variant="mosaic-large" />
      </div>
    </section>
  );
}
