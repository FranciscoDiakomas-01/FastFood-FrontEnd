import { Link } from 'react-router-dom';
import './index.css'
import { FaShoppingBag } from 'react-icons/fa';
export default function Header() {
    return (
    <nav id="header">
        <Link to={"/dash/reserva"}>
            <FaShoppingBag/>
        </Link>
    </nav>
    );
}