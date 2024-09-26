/* eslint-disable no-unused-vars */

import userAvatar from '../../assets/photo_2024-07-14_22-50-25.jpg'
import { useState } from "react";
import './index.css'
import {Swiper , SwiperSlide } from 'swiper/react'
import ClientCard from '../cards/clients';
export default function Clients() {

    const [clients ,setClients] = useState([

        {
            name : 'Francisco',
            stars : [true , true , true , true , true],
            content : 'loremdsuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
            userAvatar,
            id : crypto.randomUUID(),
            email : 'frandev@gmail.com'
        },
        {
            name : 'Francisco',
            stars : [true , true , true , false , false],
            content : 'loremdsuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
            userAvatar,
            id : crypto.
            randomUUID(),
            email : 'frandev@gmail.com'
        },  {
            name : 'Francisco',
            stars : [true , true , true , true , false],
            content : 'loremdsuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
            userAvatar,
            id : crypto.randomUUID(),
            email : 'frandev@gmail.com'
        },
        {
            name : 'Francisco',
            stars : [true , true , true , true , false],
            content : 'loremdsuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
            userAvatar,
            id : crypto.randomUUID(),
            email : 'frandev@gmail.com'
        }
    ])
    return (
        <div id='clients'>
            
                <div>
                    <h1>Oque os Nossos Clientes Dizem</h1>
                </div>
            <article>
                <Swiper
                    slidesPerView={2}
                    pagination = { { clickable : true} }
                    navigation
                    spaceBetween={30}
                    style={{padding : '50px'}}
                >
                    {
                        clients.map((nProduct) => (

                            <SwiperSlide key={nProduct.id}>
                                <ClientCard 
                                    contet={nProduct.content} 
                                    stars={nProduct.stars}
                                    id={nProduct.id}
                                    avatar={nProduct.userAvatar}
                                    key={nProduct.id}
                                    name={nProduct.name}
                                    email={nProduct.email}
                                />
                            </SwiperSlide>
                            
                        ))
                    }
                </Swiper>
            </article>
        </div>
    );
}