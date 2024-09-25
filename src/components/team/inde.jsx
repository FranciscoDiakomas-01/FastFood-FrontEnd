
import './index.css'
import plate from '../../assets/pngegg (7).png'
export default function Team() {
    return (
    <section id="team">
        <article>
            <aside>
                <div>
                <h1>A FastFood Oferece Para Si o Seguinte!</h1>
                <ul>
                    <li>
                        <span>01</span>
                        <p>Variedade de Pratos</p>
                    </li> 
                    <li>
                        <span>02</span>
                        <p>Ingredientes Frescos e de Qualidade</p>
                    </li> 
                    <li>
                        <span>03</span>
                        <p>Entrega Rápida e Segura</p>
                    </li>
                    <li>
                        <span>04</span>
                        <p>Facilidade de Pedido</p>
                    </li>
                    <li>
                        <span>05</span>
                        <p>Promoções e Descontos</p>
                    </li>
                    <li>
                        <span>05</span>
                        <p>Atendimento ao Cliente</p>
                    </li>
                </ul>

                </div>
                
                <img src={plate} />
            </aside>
        </article>


    </section>
    );
}