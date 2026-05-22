import './MobileCatBar.css';

export default function MobileCatBar({ activeCategory, onCategoryChange }) {
  const categories = ['Alle', 'Politik', 'Teknologi', 'Sport', 'Underholdning'];

  return (
    <div className="mobile-cat-bar">
      <select 
        value={activeCategory} 
        onChange={(e) => onCategoryChange(e.target.value)}
        className="mobile-cat-bar__select"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
