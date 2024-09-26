/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { FaStar , FaRegStar   } from "react-icons/fa";
import './index.css'
export default function ClientCard({name , avatar , contet , stars , email}) {
return (
    <figure id="cardClient">
        <span>
            <img loading="lazy" src={avatar} alt={name} />
            <figcaption>
                <p>
                    {name}
                </p>
                <i>{email}</i>
            </figcaption>
        </span>
        <span>
            {contet}
        </span>
        <div>
            {
                stars.map(star => (
                    star ? <FaStar/>  : <FaRegStar/>
                ))
            }
        </div>
    </figure>
);
}