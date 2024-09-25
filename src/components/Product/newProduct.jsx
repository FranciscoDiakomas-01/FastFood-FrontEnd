
import ham1 from '../../assets/ham.png'
import CardProduct from "../cards/productCard";
import { useState } from "react";
import pizza1 from '../../assets/pizza1.png'
import refri1 from '../../assets/refri1.png'
import suco from '../../assets/suco1.png'
import frango from '../../assets/frango.png'
import salada from '../../assets/salada.png'
import './index.css'
import {Swiper , SwiperSlide } from 'swiper/react'
export default function Product() {
    const [PopularProduct , setPoputalProduct] = useState([
        {
            id : crypto.randomUUID(),
            description : 'Hambúrguer Francês',
            price : 3000,
            stars : [true , true , true , false , false],
            img : ham1,
            isNew : false
        },
        {
            id : crypto.randomUUID(),
            description : 'Pizza Francês',
            price : 9000,
            stars : [true , true , true , false , false],
            img : pizza1,
            isNew : false
        },
        {
            id : crypto.randomUUID(),
            description : 'Sumos de Frutas Naturais',
            price : 3000,
            stars : [true , true , false , false , false],
            img : suco,
            isNew : false
        },
        {
            id : crypto.randomUUID(),
            description : 'Salada',
            price : 3000,
            stars : [true , true , true , true , false],
            img : salada,
            isNew : false
        }, {
            id : crypto.randomUUID(),
            description : 'Frango Frito',
            price : 3000,
            stars : [true , true , false , false , false],
            img : frango,
            isNew : false
        }
        , {
            id : crypto.randomUUID(),
            description : 'Refrigerantes',
            price : 3000,
            stars : [true , true , true , true , false],
            img : refri1,
            isNew : false
        }, {
            id : crypto.randomUUID(),
            description : 'Frango Frito',
            price : 3000,
            stars : [true , true , false , false , false],
            img : frango,
            isNew : false
        }
        , {
            id : crypto.randomUUID(),
            description : 'Refrigerantes',
            price : 3000,
            stars : [true , true , true , true , false],
            img : refri1,
            isNew : false
        }

    ])

    const [NewProducts , setNewProcusct] = useState([
        {
            id : crypto.randomUUID(),
            description : 'Hambúrguer Francês',
            price : 3000,
            stars : [true , true , true , false , false],
            img : ham1,
            isNew : true
        },
        {
            id : crypto.randomUUID(),
            description : 'Pizza Francês',
            price : 9000,
            stars : [true , true , true , false , false],
            img : pizza1,
            isNew : true
        },
        {
            id : crypto.randomUUID(),
            description : 'Sumos de Frutas Naturais',
            price : 3000,
            stars : [true , true , false , false , false],
            img : suco,
            isNew : true
        },
        {
            id : crypto.randomUUID(),
            description : 'Salada',
            price : 3000,
            stars : [true , true , true , true , false],
            img : salada,
            isNew : true
        }, {
            id : crypto.randomUUID(),
            description : 'Frango Frito',
            price : 3000,
            stars : [true , true , false , false , false],
            img : frango,
            isNew : true
        }
        , {
            id : crypto.randomUUID(),
            description : 'Refrigerantes',
            price : 3000,
            stars : [true , true , true , true , false],
            img : refri1,
            isNew : true
        }, {
            id : crypto.randomUUID(),
            description : 'Frango Frito',
            price : 3000,
            stars : [true , true , false , false , false],
            img : frango,
            isNew : true
        }
        , {
            id : crypto.randomUUID(),
            description : 'Refrigerantes',
            price : 3000,
            stars : [true , true , true , true , false],
            img : refri1,
            isNew : true
        }

    ])
    return (
        <div id='pd'>
            <article>
                <h1>Produtos em Promoção</h1>
                <Swiper
                    slidesPerView={5}
                    pagination = { { clickable : true} }
                    navigation
                    spaceBetween={30}
                    style={{padding : '50px'}}
                >
                    {
                        PopularProduct.map((nProduct) => (

                            <SwiperSlide key={nProduct.id}>
                                <CardProduct 
                                    description={nProduct.description} 
                                    stars={nProduct.stars}
                                    price={nProduct.price}
                                    id={nProduct.id}
                                    img={nProduct.img}
                                />
                            </SwiperSlide>
                            
                        ))
                    }
                    
                    
                </Swiper>
                <button>Ver Todos</button>
            </article>
            <article>
                {
                    NewProducts && (

                        <>
                            <h1>Novos Produtos</h1>
                            <Swiper
                                slidesPerView={5}
                                pagination = { { clickable : true} }
                                navigation
                                spaceBetween={30}
                                style={{padding : '50px'}}
                                
                            >
                                {
                                    NewProducts.map((nProduct) => (

                                        <SwiperSlide key={nProduct.id}>
                                            <CardProduct 
                                                description={nProduct.description} 
                                                stars={nProduct.stars}
                                                price={nProduct.price}
                                                id={nProduct.id}
                                                img={nProduct.img}
                                                isNew={nProduct.isNew}
                                            />
                                        </SwiperSlide>
                                        
                                    ))
                                }
                                
                                
                            </Swiper>
                            
                            <button>Ver Todos</button>
                        </>
                    )
                }
                
            </article>
        </div>
    );
}