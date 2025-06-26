import './style.css';

export default function Features( {children} ) {
  return (
    <div className="features-grid">
      {children}
    </div>
  );
}