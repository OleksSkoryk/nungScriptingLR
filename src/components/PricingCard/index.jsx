import './style.css';

export default function FeatureCard({ icon, title, description, price }) {
  return (
    <div className="pricing-card">
      <img src={icon} className='pricing-icon' alt="Icon"></img>
      <p className="pricing-title">{title}</p>
      <p className="pricing-description">{description}</p>
      <p className="pricing-price">{price}</p>
    </div>
  );
}