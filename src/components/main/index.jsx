import './index.css'
import plate from '../../assets/prato.png'
import Discount from '../discount'
import arrow from '../../assets/right-arrow.png'
function Main() {
    return (
        <section id='main'>
            <article>
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
            <article>
                <Discount/>
                    <img src={plate}/>
                    <div id='aberto'>
                        <h1>Aberto</h1>
                        <p>
                            09:30 ás 18:30
                        </p>
                        <img src={arrow} />
                    </div>
                    
            </article>
        </section>
    )
}
export default Main