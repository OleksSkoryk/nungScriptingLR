import './style.css';

export default function SpecsPricingLine({ children, bold, onClick }) {
  return (
      <a href='https://amazon.com/' className='specs-buy-button' type={bold ? 'bold' : 'normal'}>{children}</a>
  );
}