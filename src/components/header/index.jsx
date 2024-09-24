import './index.css'
import Logo from '../logo'
import { LuShoppingCart } from "react-icons/lu";
export default function Header() {
    return (
        <header id='heder'>
            <nav>
                <div>
                    <Logo/>
                    <p>FastFood</p>
                </div>
                <ul>
                    <li>
                        <a href='#'>Inicial</a>
                    </li>
                    <li>
                        <a href='#'>Menu</a>
                    </li>
                    <li>
                        <a href='#'>Sobre</a>
                    </li>
                    <li>
                        <a href='#'>Contacto</a>
                    </li>
                </ul>
                <div>
                    <LuShoppingCart/>
                    <button>Entrar</button>
                </div>
            </nav>
        </header>
    )
}
