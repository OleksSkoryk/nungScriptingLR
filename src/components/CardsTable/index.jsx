import './style.css';

export default function CardsTable( {children} ) {
  return (
    <div className="features-grid">
      {children}
    </div>
  );
}