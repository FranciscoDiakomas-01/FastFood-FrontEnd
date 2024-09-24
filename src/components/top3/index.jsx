/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import './index.css'

import { FaStar, FaStarHalf } from 'react-icons/fa'


function TopProduct({stars , price , img , description}) {
    return (

        <aside id='TopProduct'>
            <span>
                <img src={img} />
            </span>
            <span>
                <h3>
                    {description}
                </h3>
                <div>
                    {
                        stars.map((star) => (
                            star ? <FaStar/> : <FaStarHalf/>
                        ))
                    }
                </div>
                <p>
                    {price}
                </p>
            </span>
            <button>+</button>
        </aside>
    )
}
export default TopProduct