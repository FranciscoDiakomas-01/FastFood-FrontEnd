/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { BiHeart } from "react-icons/bi";
import { FaRegStar , FaStar } from "react-icons/fa";
export default function PopularCategory({stars , description , img }) {
    return (
        <div id="POpular">
            <img src={img} />
            <span>
                <h3>{description}</h3>
                <div>
                    {
                        stars.map((star)=>(

                            star ? <FaStar/> : <FaRegStar/>
                        ))
                    }
                </div>
            </span>
            <button>
                <BiHeart/>
            </button>
        </div>
    )
}
