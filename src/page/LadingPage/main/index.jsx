import './index.css'
import plate from '../../assets/prato.png'
import Discount from '../discount'
import { useEffect } from 'react'
import {gsap} from'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function Main() {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        setTimeout(()=>{
            gsap.to('.mainText', {
                x : 0,
                opacity : 1,
                rotate : '0deg',
            })
        }, 500)
        setTimeout(()=>{
            gsap.to('.mainImg', 
                {
                    x : 0,
                    opacity : 1,
                    rotate : '0deg',
                    scale : 1,
                }
        
        )
        }, 1000)
        return ()=>{
            gsap.killTweensOf(".mainText")
            gsap.killTweensOf(".mainImg")
        }
    } , [])
    return (
        <section id='main'>
            <article className='mainText'>
                <h1>
                    Comida <span>Saudável</span> <br />
                    está a sua Espera na <br />
                    <span>Fast</span>Food!
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore enim numquam voluptate sed illo nemo dicta laboriosam labore ipsa dolor excepturi iusto neque repellat, recusandae 
                </p>
                <div>
                    <button>Ver Menu</button>
                    <button>Reserva</button>
                </div>
            </article>
            <article className='mainImg'>
                <Discount/>
                    <img src={plate} loading='lazy'/>
                    <div id='aberto'>
                        <h1>Aberto</h1>
                        <p>
                            09:30 ás 18:30
                        </p>
                    </div>
                    
            </article>
        </section>
    )
}
export default Main