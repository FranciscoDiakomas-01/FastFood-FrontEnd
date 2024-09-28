import { Link } from 'react-router-dom';
import './index.css'
import { FaShoppingBag  , FaUserAlt} from 'react-icons/fa';
export default function Header() {
    return (
    <nav id="header">
        <Link to={"/dash/card"}>
            <FaShoppingBag/>
        </Link>
        <Link to={"/dash/profile"}>
            <FaUserAlt/>
        </Link>
    </nav>
    );
}