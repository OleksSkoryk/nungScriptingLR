import './style.css';

export default function SpecsPricingLine({ text, bold }) {
  return (
    <div className='specs-pricing-line'>
      <p className='specs-pricing-text' type={bold ? 'bold' : 'normal'}>{text}</p>
    </div>
  );
}