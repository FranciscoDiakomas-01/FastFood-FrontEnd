import { RiShoppingBagLine } from "react-icons/ri";
import './index.css'
import { useState , useEffect } from "react"
export default function Discount() {

    const [discount , setDiscount]  = useState(5)
    useEffect(()=>{

        setDiscount(5)
    },[])
    
    return (
        <aside id="discount">
            <div>
                <RiShoppingBagLine/>
            </div>
            <h2>
                {discount}%
            </h2>
            <p>
                <span>Disconto</span>
                por duas reservas
            </p> 
        </aside>
    )
}
