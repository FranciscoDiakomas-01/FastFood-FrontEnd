/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {MdAddShoppingCart  } from "react-icons/md";
import { FaStar , FaRegStar  } from "react-icons/fa";
import './index.css'
export default function CardProduct({description , img , price , id , stars , isNew }) {
return (
    <figure id="card">
        {
            isNew && <b>Novo</b>
        }
        <img loading="lazy" src={img} alt={name} />
        <figcaption>
            {description}
        </figcaption>
        <div>
            {
                stars.map(star => (
                    star ? <FaStar/>  : <FaRegStar/>
                ))
            }
        </div>
        
        <span>
            <div>
                <p>
                    {
                        Number(price).toLocaleString('pt',{
                            style : 'currency',
                            currency : 'AOA'
                        })
                    }
                </p>
            </div>
            <div>
                <button  id={id}>
                    <MdAddShoppingCart/>
                </button>
            </div>
        </span>
    </figure>
);
}