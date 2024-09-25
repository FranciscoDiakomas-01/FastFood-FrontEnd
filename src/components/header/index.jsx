import './index.css'
import Logo from '../logo'
import { LuLogIn } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from 'react';
export default function Header() {

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
            name : 'Compras',
            href : "#compras",
            id : crypto.randomUUID()
        },
        {
            name : 'Sobre',
            href : "#sobre",
            id : crypto.randomUUID()
        },
        {
            name : 'Contacto',
            href : "#contacto",
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
                    <LuShoppingCart/>
                    <button>
                        <LuLogIn/>
                    </button>
                </div>
            </nav>
        </header>
    )
}
