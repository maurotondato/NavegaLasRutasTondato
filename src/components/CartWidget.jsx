import { Link } from 'react-router-dom';

export default function CartWidget() {
  return (
    <Link to="/cart">
      <img src="https://cdn-icons-png.flaticon.com/512/34/34568.png" alt="cart" style={{ width: 30 }} />
    </Link>
  );
}
