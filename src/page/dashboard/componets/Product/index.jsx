
import './index.css'
export default function Product({img , name , qtd ,  price , id , noButoons}) {
    return (
    <div id={id} className='CarrinhoElemn'>
        <span>
            <img src={img} alt={name} loading="lazy"/>
        </span>
        <span>
            <h4>{name}</h4>
            <p>Preço : {price}</p>
            <p>Qtd : {qtd}</p>
            {
                !noButoons &&  <div>
                <button onClick={()=>{
                }}>+</button>
                <button  onClick={()=>{
                }}>-</button>
            </div>
            }
            
        </span>
    </div>
    );
}

