

import './index.css'
import Product from '../../componets/Product';
import { useState } from 'react';
import b2 from '../../../assets/hambu1.png'



export default function Carrinho() {

    const [cards , setCards] = useState([
        {
            img : b2,
            name : "Hamburguer",
            price : 100,
            id : 1,
            qtd : 10
        },
        {
            img : b2,
            name : "Hamburguer",
            price : 100,
            id : 12,
            qtd : 10
        },
        {
            img : b2,
            name : "Hamburguer",
            price : 100,
            id : 13,
            qtd : 10
        },
        {
            img : b2,
            name : "Hamburguer",
            price : 100,
            id : 14,
            qtd : 10
        },{
            img : b2,
            name : "Hamburguer",
            price : 100,
            id : 15,
            qtd : 10
        },
        {
            img : b2,
            name : "Hamburguer",
            price : 100,
            id : 16,
            qtd : 10
        },{
            img : b2,
            name : "Hamburguer",
            price : 100,
            id : 15,
            qtd : 10
        },
        {
            img : b2,
            name : "Hamburguer",
            price : 100,
            id : 16,
            qtd : 10
        }
    ])
    return (
        <main id='carrinho'>
            <article>

                {
                    cards.map(card=>(
                        <Product
                            key={card.id}
                            img={card.img}
                            price={card.price}
                            qtd={card.qtd}
                            id={card.id}
                            name={card.name}
                        />
                    ))
                }

            </article>
            <article>
                <header>
                        <h1>Meu Carrinho</h1>
                </header>
                <form>
                    <label>Pagamento</label>
                    <select>
                        <option>Selecione uma Forma de Pagamento</option>
                    </select>
                    
                    <label>Endereço</label>
                    <input placeholder='seu actual endereço'/>

                    <div>
                        <label htmlFor='geo'>Usar meus dados Geográfico</label>
                        <input type='checkbox' name='geo' id='geo'/>
                    </div>

                    <div>
                        <button>Finalizar</button>
                        <button>Cancelar</button>
                    </div>
                </form>
                <footer>
                    <span>
                        <p>Total Produtos</p>
                        <p>
                            {
                                0
                            }
                        </p>
                    </span>
                    <span>
                        <p>Montante</p>
                        <p>
                            {
                                Number(0).toLocaleString('pt',{
                                    style : 'currency', 
                                    currency : 'AOA'
                                })
                            }
                        </p>
                    </span>
                </footer>
            </article>
        </main>
    );
}