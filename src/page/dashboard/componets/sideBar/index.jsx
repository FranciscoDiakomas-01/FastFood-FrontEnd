import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import {MdAddShoppingCart  } from "react-icons/md";
import { useState } from "react";
import logo from '../../../assets/logo.png'
import './index.css'
export default function SideBar() {
    const [activeLink , setActiveLink] = useState("Inicial")
    const links =[
        {
            paht : "/dash/home",
            name : "Inicial",
            icon : <MdAddShoppingCart/>
        },
        {
            paht : "/dash/ategory",
            name : "Categoria",
            icon : <MdAddShoppingCart/>
        },{
            paht : "/dash/tags",
            name : "Artigos",
            icon : <MdAddShoppingCart/>
        },
        {
            paht : "/dash/movimento",
            name : "Histórico",
            icon : <MdAddShoppingCart/>
        },
        {
            paht : "/dash/config",
            name : "Configurações",
            icon : <IoSettings/>
        },
    ]
    return (
    <nav id="sideBar">
        <div>
            <img alt="Logo" src={logo} />
            <p>FastFood</p>
        </div>
        <ul>
                
            {
                links.map(link => (
                    <Link key={link.paht} to={link.paht} onClick={()=>{
                        setActiveLink(link.name)
                        
                    }} style={{
                            backgroundColor : activeLink == link.name ? '#ff651c' : '#ffff',
                            color : activeLink == link.name ? '#ffff' : '#ff651c',
                        }}> 
                        
                        {
                            link.icon
                        }
                        <p>
                            {link.name}
                        </p>
                        
                    </Link>

                ))
            }
        </ul>
        <button>Sair</button>
    </nav>
    );
}