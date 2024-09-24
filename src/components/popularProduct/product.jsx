/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { TbEyePlus } from "react-icons/tb";
import { FaRegStar , FaStar} from "react-icons/fa";
export default function PopularCategory({stars , description , img , price}) {
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
                <h4>
                    {
                        Number(price ?? 0).toLocaleString("AO" , {
                            style : 'currency',
                            currency : 'AOA'
                        })
                    }
                </h4>
            </span>
            <button>
                <TbEyePlus/>
            </button>
        </div>
    )
}
