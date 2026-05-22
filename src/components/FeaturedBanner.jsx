import ArticleCard from './articleCard';

export default function FeaturedBanner({ article }) {
  if (!article) return null;
  return (
    <section className="home__featured">
      <ArticleCard article={article} variant="h-banner" imageSide="left" featured />
    </section>
  );
}
