import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const CATEGORIES = ['Alle', 'Indland', 'Udland', 'Teknologi', 'Sport', 'Politik', 'Samfund'];

export default function Navbar({ activeCategory, onCategoryChange }) {
  const navigate = useNavigate();

  const handleCategory = (cat) => {
    if (onCategoryChange) onCategoryChange(cat);
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => handleCategory('Alle')}>
          INGN
        </Link>

        <nav className="navbar__cats">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`navbar__cat${activeCategory === cat ? ' navbar__cat--active' : ''}`}
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="navbar__icons">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </div>
      </div>
    </header>
  );
}
