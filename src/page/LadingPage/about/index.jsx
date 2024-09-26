
import './ndex.css'
import chefe from '../../assets/chef5.png'
import { FaPaperPlane } from 'react-icons/fa';
export default function AboutUs() {
    return (
    <>
        <section id='about'>
            <article>
                <p>Sobre Nós</p>
                <h1>
                Bem-vindo ao <span>FastFood</span>, onde a paixão pela culinária encontra a conveniência do <span>delivery</span>.
                </h1>
                <span>Nossa missão é trazer até você refeições deliciosas, preparadas com ingredientes frescos e de alta qualidade, diretamente na sua porta.
                </span>
                <button>Baixar Cv</button>
            </article>
            <article>
                <img src={chefe} loading='lazy' />
            </article>
        </section>

        <div id='pomg'>
            <aside>
                    <h1>Junte-se à nossa plataforma e ganha disconto até 10%</h1>
                <form>
                    <input type='email' required placeholder='Entre com seu email' />
                    <button>
                        <FaPaperPlane/>
                    </button>
                </form>
                <a>Novidade a sua espera</a>
            </aside>
            
        </div>
    
    
    </>
    
    );
}