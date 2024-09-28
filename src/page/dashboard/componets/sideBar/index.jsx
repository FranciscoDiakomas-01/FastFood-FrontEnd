
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../../assets/logo.png'
import './index.css'
import { BsUiChecksGrid } from "react-icons/bs";
import { FaHistory , FaShoppingCart , FaRegStar , FaArrowLeft} from "react-icons/fa";

export default function SideBar() {
    const [activeLink , setActiveLink] = useState("Cardápio")
    const links =[
        {
            paht : "/dash/home",
            name : "Cardápio",
            icon : <BsUiChecksGrid/>
        },{
            paht : "/dash/card",
            name : "Carrinho",
            icon : <FaShoppingCart/>
        },
        {
            paht : "/dash/tags",
            name : "Avalição",
            icon : <FaRegStar/>
        },
        {
            paht : "/dash/movimento",
            name : "Histórico",
            icon : <FaHistory/>
        },
        {
            paht : "/",
            name : "Lading Page",
            icon : <FaArrowLeft/>
        }
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