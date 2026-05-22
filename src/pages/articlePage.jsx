import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getArticleBySlug } from '../lib/contentful';
import './ArticlePage.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return `D. ${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getFullYear()}`;
}

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getArticleBySlug(slug)
      .then(setArticle)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="artpage__status">Henter artikel…</div>;
  if (error || !article) return <div className="artpage__status artpage__status--error">Artikel ikke fundet.</div>;

  const { overskrift: title, dato: date, forfatter: author, billede: image, indhold: content, kategori: category } = article.fields;
  const imgUrl = image?.fields?.file?.url ? `https:${image.fields.file.url}` : null;

  return (
    <main className="artpage">
      <div className="artpage__inner">
        <Link to="/" className="artpage__back">← Tilbage til forsiden</Link>

        {imgUrl && (
          <img src={imgUrl} alt={title} className="artpage__hero" />
        )}

        <div className="artpage__header">
          <h1 className="artpage__title">{title}</h1>
          <div className="artpage__meta">
            <span className="artpage__date">{formatDate(date)} - af {author}</span>
            <span className="artpage__cat">{category}</span>
          </div>
        </div>

        <div className="artpage__body">
          {content ? documentToReactComponents(content) : <p>Intet indhold.</p>}
        </div>
      </div>
    </main>
  );
}
