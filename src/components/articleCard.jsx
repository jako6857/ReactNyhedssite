import { Link } from 'react-router-dom';
import './ArticleCard.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return `D. ${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getFullYear()} - af `;
}

export default function ArticleCard({ article, featured = false, variant = 'default', imageSide = 'left' }) {
  const { overskrift: title, slug, dato: date, forfatter: author, billede: image, excerpt, kategori: category, indhold } = article.fields;
  const imgUrl = image?.fields?.file?.url ? `https:${image.fields.file.url}` : null;

  const classes = [
    'card',
    featured ? 'card--featured' : '',
    variant && variant !== 'default' ? `card--${variant}` : '',
    imageSide ? `card--img-${imageSide}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  // Vandret banner, billede side
  if (variant === 'h-banner') {
    return (
      <article className={classes}>
        {imgUrl && (
          <Link to={`/artikel/${slug}`} className="card__img-wrap card__img-wrap--banner">
            <img src={imgUrl} alt={title} className="card__img" />
          </Link>
        )}
        <div className="card__content">
          <div className="card__meta">
            <span className="card__date">{formatDate(date)}</span>
            <span className="card__author">{author}</span>
          </div>
          <h2 className="card__title">{title}</h2>
          {excerpt && <p className="card__excerpt">{excerpt}</p>}
          <Link to={`/artikel/${slug}`} className="card__readmore">Læs mere</Link>
        </div>
      </article>
    );
  }

  return (
    <article className={classes}>
      <div className="card__meta">
        <span className="card__date">{formatDate(date)}</span>
        <span className="card__author">{author}</span>
      </div>
      <h2 className="card__title">{title}</h2>
      {excerpt && <p className="card__excerpt">{excerpt}</p>}
      <Link to={`/artikel/${slug}`} className="card__readmore">Læs mere</Link>
      {imgUrl && (
        <Link to={`/artikel/${slug}`} className="card__img-wrap">
          <img src={imgUrl} alt={title} className="card__img" />
        </Link>
      )}
    </article>
  );
}
