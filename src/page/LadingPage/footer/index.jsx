
import { FaFacebook , FaInstagram , FaLinkedin , FaTwitter } from "react-icons/fa";
import './index.css'
import Logo from '../../assets/logo.png'
export default function Footer() {
 return (
    <footer id="footer">
        <main>
        <article>
            <span>FastFood</span>
            <p>
                Queremos ser a sua primeira escolha quando se trata de delivery de comida. Estamos constantemente inovando e melhorando nossos serviços para garantir que cada refeição seja uma experiência memorável.
            </p>
            <div>
                <a>
                    <FaFacebook/>
                </a>
                <a>
                    <FaInstagram/>
                </a>
                <a>
                    <FaLinkedin/>
                </a>
                <a>
                    <FaTwitter/>
                </a>
            </div>
        </article>

        <article>
            
            <aside>
                <strong>Links</strong>
                <ul>
                    <li>
                        <a>Incial</a>
                    </li>
                    <li>
                        <a>Menu</a>
                    </li>
                    <li>
                        <a>Sobre</a>
                    </li>
                    <li>
                        <a>Categoria</a>
                    </li>
                    <li>
                        <a>Compras</a>
                    </li>
                </ul>
            </aside>
            <aside>
                <strong>Nosso Menu</strong>
                <ul>
                    <li>
                        <a>Especial</a>
                    </li>
                    <li>
                        <a>Popular</a>
                    </li>
                    <li>
                        <a>Categorias</a>
                    </li>
                </ul>
            </aside>
            <aside>
                <strong>Contactos</strong>
                <ul>
                    <li>
                        <a>franciscodiakoma@gmail.com</a>
                    </li>
                    <li>
                        <a>+244 957 777 993</a>
                    </li>
                    <li>
                        <a>Categorias</a>
                    </li>
                </ul>
            </aside>
        </article>
        </main>

        <aside>
            <p> &copy; 2024 FranciscoDiakomas Todos direitos reservados</p>
            <figure>
                 <img src={Logo} />
                 <figcaption>
                    <p>F</p> astFood</figcaption>
            </figure>
           
        </aside>
        
    </footer>
    );
}