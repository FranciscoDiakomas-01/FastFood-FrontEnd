
import './index.css'
import Logo from '../logo'
import {  FaUser } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const navi = useNavigate()
    const[actvive , setAcive] = useState("Inicial")
    const likns = [
        {
            name : 'Inicial',
            href : "#",
            id : crypto.randomUUID()
        },
        {
            name : 'Cardápio',
            href : "#procuctSide",
            id : crypto.randomUUID()
        },
        {
            name : 'Sobre',
            href : "#about",
            id : crypto.randomUUID()
        },
        {
            name : 'Contacto',
            href : "#contact",
            id : crypto.randomUUID()
        }
    ]
    
    return (
        <header id='heder'>
            <nav>
                <div>
                    <Logo/>
                    <p>FastFood</p>
                </div>
                <ul>
                    {
                        likns.map((link)=>(

                            <li key={link.id} >
                                <a href={link.href} 
                                    style={{
                                        color : actvive == link.name ? '#ff651c' : 'black'
                                    }}
                                    onClick={()=> setAcive(link.name)}
                                >
                                {link.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <FaUser onClick={()=>{
                        navi("/dash/home")
                    }}/>
                    <button onClick={()=>{
                        navi("/enter")
                    }}>
                        Sign Up
                    </button>
                    <button  onClick={()=>{
                        navi("/enter")
                    }}>
                        Login
                    </button> 
                </div>
            </nav>
        </header>
    )
}
