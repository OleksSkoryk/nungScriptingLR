import './style.css';

export default function SpecsPricingLine({ children, bold }) {
  return (
      <button className='specs-buy-button' type={bold ? 'bold' : 'normal'}>{children}</button>
  );
}