
import './index.css'
import plate from '../../assets/pizza1.png'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function Team() {

    useEffect(()=>{


        gsap.registerPlugin(ScrollTrigger)
        setTimeout(()=>{
            gsap.to('.list', {
                x : 0,
                opacity : 1,
                rotate : '0deg',
                scrollTrigger : {
                    trigger : '.TiggerAd',
                    scrub : true,
                    start : 'top 700px',
                    end : 'bottom 700px',
                }
            })
    
        }, 500)
        setTimeout(()=>{
            gsap.to('.pizzza', 
                {
                    x : 0,
                    opacity : 1,
                    rotate : '0deg',
                    scale : 1,
                    scrollTrigger : {
                        trigger : '.TiggerAd',
                        scrub : true,
                        start : 'top 700px',
                        end : 'bottom 600px',
                    }
                }
        
        )
        }, 1000)
    }, [])
    return (
    <section id="team">
        <article>
            <aside className='TiggerAd'>
                <div>
                <h1  className='list'>A FastFood Oferece Para Si o Seguinte!</h1>
                <ul className='list'>
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
                
                <img src={plate} className='pizzza'/>
            </aside>
        </article>


    </section>
    );
}