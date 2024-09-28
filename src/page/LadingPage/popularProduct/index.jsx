
import ham1 from '../../assets/ham.png'
import { useState  , useEffect } from "react"
import './index.css'
import PopularCategory from './product'
import pizza1 from '../../assets/pizza1.png'
import refri1 from '../../assets/refri1.png'
import suco from '../../assets/suco1.png'
import frango from '../../assets/frango.png'
import salada from '../../assets/salada.png'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function PopularProduct() {


    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('#CatProd', {
            x : 0,
            opacity : 1,
            scrollTrigger : {
                trigger : '.CatTigger',
                scrub : true,
                start : 'top 700px',
                end : 'bottom 800px',

            }
        })

        setTimeout(()=>{
            
        },800)
        gsap.to('.itens', {
            x : 0,
            opacity : 1,
            scale : 1,
            rotate : '0deg',
            scrollTrigger : {
                trigger : '.CatTigger',
                scrub : true,
                start : 'top 700px',
                end : 'bottom 800px',

            }
        })
        return ()=>{
            gsap.killTweensOf(".itens")
            gsap.killTweensOf("#CatProd")
        }

    } , [])
    const [plateList , setPlateList] = useState([
        {
            id : crypto.randomUUID(),
            stars : [true , true ,true , true , true],
            price : 2500,
            description : 'Hamburguer',
            img : ham1 
        },
        {
            id : crypto.randomUUID(),
            stars : [true , true ,true , true , false],
            price : 1500,
            description : 'Pizza',
            img : pizza1
        }, {
            id : crypto.randomUUID(),
            stars : [true , true ,true , false , false],
            price : 2500,
            description : 'Saladas',
            img : salada 
        },
        {
            id : crypto.randomUUID(),
            stars : [true , true ,true , true , false],
            price : 9000,
            description : 'Frango',
            img : frango
        },
        {
            id : crypto.randomUUID(),
            stars : [true , true ,true , false , false],
            price : 900,
            description : 'Refrigerantes',
            img : refri1
        },
        {
            id : crypto.randomUUID(),
            stars : [true , true ,false , false , false],
            price : 6000,
            description : 'Sumos Naturais',
            img : suco
        }
    ])
    return (
        <section id='popular'>
            
            <article className='CatTigger'>

                <aside className='itens'>
                    {
                        plateList.map((plate)=>(
                            <PopularCategory description={plate.description} key={plate.id} img={plate.img}  stars={plate.stars}  re/>
                        ))
                    }
                </aside>

                <aside id='CatProd'>
                    <h1>
                        <span>Categoria</span>
                        dos Pratos Mais Populares da <span>Fast</span>Food
                    </h1>
                    <p>Delicie-se com os nosso pratos exclusivos!</p>
                    <button>Ver Todos</button>

                    
                </aside>
            </article>
        </section>
    )
}
