/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../../assets/logo.png'
import './index.css'
export default function SideBar() {
    const [activeLink , setActiveLink] = useState("Inicial")
    const links =[
        {
            paht : "/dash/home",
            name : "Inicial"
        },
        {
            paht : "/dash/card",
            name : "Carrinho"
        },
        {
            paht : "/dash/ategory",
            name : "Categoria"
        },{
            paht : "/dash/reserva",
            name : "Reserva"
        },{
            paht : "/dash/tags",
            name : "Promoções"
        },
        {
            paht : "/dash/movimento",
            name : "Movimentações"
        },
        {
            paht : "/dash/configuração",
            name : "Categoria"
        }
    ]
    return (
    <nav id="sideBar">
        <img alt="Logo" src={logo} />
        <ul>
                
            {
                links.map(link => (
                    <Link key={link.paht} to={link.paht} onClick={()=>{
                        setActiveLink(link.name)
                    }}> 
                        {link.name}
                    </Link>

                ))
            }
        </ul>
        <button>Sair</button>
    </nav>
    );
}