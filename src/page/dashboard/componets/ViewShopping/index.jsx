

import './index.css'
import Product from '../Product';
import { Swiper , SwiperSlide} from 'swiper/react'
import { useState } from 'react';
import bg from '../../../assets/bg.jpg'
export default function ViewShopping({close}) {

    const [list , setList] = useState([

        {
            description : "a" ,
            stars : "a" ,
            price: 10 ,
            id : "a",
            img : "a",
            isNew : "a",
        },{
            description : "a" ,
            stars : "a" ,
            price: 10 ,
            id : "a",
            img : "a",
            isNew : "a",
        },{
            description : "a" ,
            stars : "a" ,
            price: 10 ,
            id : "a",
            img : "a",
            isNew : "a",
        },{
            description : "a" ,
            stars : "a" ,
            price: 10 ,
            id : "a",
            img : "a",
            isNew : "a",
        },{
            description : "a" ,
            stars : "a" ,
            price: 10 ,
            id : "a",
            img : "a",
            isNew : "a",
        }
    ])
    return (
        <div id='ModalViweShoping'>

            <main>
                
            <header>
                <p>Pedido nº {0} </p>
                <button onClick={()=>{
                    close(false)
                }}>x</button>
            </header>
            <main>
                <article>
                    <span>
                        <p>Estado</p>
                        <p>Preparando</p>
                    </span>
                    <span>
                        <p>Montante</p>
                        <p>
                            {
                                Number(10).toLocaleString('pt',{
                                    style : 'currency',
                                    currency : 'AOA'
                                })
                            }
                        </p>
                    </span>
                    <span>
                        <p>Total Produtos</p>
                        <p>
                            {
                                Number(10).toLocaleString('pt',{
                                    style : 'currency',
                                    currency : 'AOA'
                                })
                            }
                        </p>
                    </span>
                    <span>
                        <p>Método de Pagamento</p>
                        <p>Pix</p>
                    </span>
                </article>
                <article>
                <Swiper
                    slidesPerView={2}
                    pagination = { { clickable : true} }
                    navigation
                    spaceBetween={60}
                    style={{padding : '50px', width : '100%'}}
        
                >
                    {
                        list.map( e => (
                        
                            <SwiperSlide key={e.id}>
                            <Product 
                                id={e.id}
                                img={bg}
                                name={e.description}
                                price={e.price}
                                qtd={1}
                                noButoons={true}

                            />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                </article>
                            
            </main>
            </main>
        </div>
    );
}