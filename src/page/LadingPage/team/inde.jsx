
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
                        <p>
                            <strong>Variedade de Pratos</strong>
                            <p>Desde comida caseira até culinária internacional, temos algo para todos os gostos.</p>
                        </p>
                    </li> 
                    <li>
                        <span>02</span>
                        <p>
                            <strong>Ingredientes Frescos</strong>
                            <p>Utilizamos ingredientes locais e frescos para garantir a melhor qualidade.</p>
                        </p>
                    </li> 
                    <li>
                        <span>03</span>
                        <p>
                            <strong>Entrega Rápida e Segura</strong>
                            <p>Seu pedido chegará quente e fresco, seguindo rigorosos padrões de higiene.</p>
                        </p>
                    </li>
                    <li>
                        <span>04</span>
                        <p>
                            <strong>Facilidade de Pedido</strong>
                            <p>Faça seu pedido online com várias opções de pagamento.</p>
                        </p>
                    </li>
                    <li>
                        <span>05</span>
                        <p>
                            <strong>Promoções e Descontos</strong>
                            <p>Aproveite nossas ofertas especiais e programa de fidelidade.</p>
                        </p>
                    </li>
                    <li>
                        <span>06</span>
                        <p>
                            <strong>Atendimento ao Cliente</strong>
                            <p>Suporte 24/7 para ajudar com qualquer dúvida ou problema</p>
                        </p>
                    </li>
                </ul>

                </div>
                
                <img src={plate} loading='lazy'/>
            </aside>
        </article>


    </section>
    );
}