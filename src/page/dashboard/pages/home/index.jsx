

import { useState } from 'react';
import './index.css'
import bg1 from '../../../assets/1.png'
import bg2 from '../../../assets/2.png'
import bg3 from'../../../assets/3.png'
import bg4 from '../../../assets/refri1.png'
import bg5 from '../../../assets/4.png'
import CardProduct from '../../../LadingPage/cards/productCard';

export default function HomeDash() {

  const [active , seActive] = useState("Todos")
  const [category , setCategory ]= useState([
    {
      name : 'Todos',
      img : bg1
    },
    {
      name : 'Hambúrger',
      img : bg5
    },
    {
      name : 'Pizza',
      img : bg3
    },
    {
      name : 'Sumos',
      img : bg2
    },
    {
      name : 'Refrigerantes',
      img : bg4
    }
  ])

  
return (
    <main id='dasHome'>
        <header>
          <nav>
            <ul>
              {
                category.map(c=>(

                  <a key={c.name} onClick={()=>{
                    seActive(c.name)
                  }}
                  style={{
                    backgroundColor : active == c.name ? 'var(--red)' : 'var(--white)',
                    color :  active == c.name ? 'var(--white)' : 'var(--black)',
                  }}
                  >
                    <img alt={c.name} src={c.img} />
                    <p>{c.name}</p>
                    
                  </a>
                ))
              }
            </ul>
          </nav>
        </header>
        <article id='ShoPcard'>
        <CardProduct 
            description={"Pizza Francesa"} 
            stars={[true , true , false , true, true]}
            price={10000}
            id={"nProduct.id"}
            img={bg1}
        />
        <CardProduct 
            description={"Pizza Francesa"} 
            stars={[true , true , false , true, true]}
            price={10000}
            id={"nProduct.id"}
            img={bg1}
        />
        <CardProduct 
            description={"Pizza Francesa"} 
            stars={[true , true , false , true, true]}
            price={10000}
            id={"nProduct.id"}
            img={bg1}
        />
        <CardProduct 
            description={"Pizza Francesa"} 
            stars={[true , true , false , true, true]}
            price={10000}
            id={"nProduct.id"}
            img={bg1}
        /> <CardProduct 
        description={"Pizza Francesa"} 
        stars={[true , true , false , true, true]}
        price={10000}
        id={"nProduct.id"}
        img={bg1}
    />
    <CardProduct 
        description={"Pizza Francesa"} 
        stars={[true , true , false , true, true]}
        price={10000}
        id={"nProduct.id"}
        img={bg1}
    />
    <CardProduct 
        description={"Pizza Francesa"} 
        stars={[true , true , false , true, true]}
        price={10000}
        id={"nProduct.id"}
        img={bg1}
    />
    <CardProduct 
    description={"Pizza Francesa"} 
    stars={[true , true , false , true, true]}
    price={10000}
    id={"nProduct.id"}
    img={bg1}

    />
        </article>
    <footer>
      <span>
          {1} de {10}
      </span>
      <span>
            <button>
              {"<"}
            </button>
            {10}
            <button>
              {">"}
            </button>
      </span>
    </footer>
    </main>
  );
}