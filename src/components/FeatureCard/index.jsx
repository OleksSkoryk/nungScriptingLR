import './style.css';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <img src={icon} className='feature-icon' alt="Icon"></img>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}