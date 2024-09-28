
import { FaTrashAlt , FaSearch  , FaRegEye} from 'react-icons/fa';
import './index.css'
import ViewShopping from '../../componets/ViewShopping';
import { useState  , useEffect} from 'react';



export default function Progresso() {

    const [view ,  setView] = useState(false)
    const [Id , setId] = useState()
    useEffect(()=>{
        

        console.log(Id)
    },[Id])

    const [shop , setShop] = useState([

        {
            name : 'Compra 1',
            status : 1,
            value : 10,
            date : '10-10-2024',
            id : 12
        },
        {
            name : 'Compra 2',
            status : 1,
            value : 10,
            date : '10-10-2024',
            id : 13
        }
    ])
    return (

    <main id="tableProgresso">
        {
            view &&  <ViewShopping close={setView}/>
        }
        <h1>
            Total Pedidos : {0}
        </h1>
        <form>
            <input type='date'/>
            <button>
                <FaSearch/>
            </button>
        </form>
        {
            shop?.length > 0 ? 
            <>
                <table>

                    <thead>
                        <tr>
                            <td>Nome</td>
                            <td>Data</td>
                            <td>Montante</td>
                            <td>Estado</td>
                            <td>Opções</td>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            shop.map(c=>(

                                <tr key={c.id}>
                                        <td>
                                            {c.name}
                                        </td>
                                        <td>
                                            {c.date}
                                        </td>
                                        <td>
                                            {
                                                Number(c.value).toLocaleString('pt',{
                                                    style : 'currency',
                                                    currency : 'AOA'
                                                })
                                            }</td>
                                        <td>
                                            <i>
                                                {
                                                    c.status == 0 && "Desativo"
                                                } 
                                                {
                                                    c.status == 1 && "Activo"
                                                } 
                                                {
                                                    c.status == 2 && "Prepando"
                                                } {
                                                    c.status == 3 && "Pronto"
                                                }
                                                {
                                                    c.status == 4 && "Concluído"
                                                } 
                                            </i>
                                        </td>
                                        <td> 
                                            <button onClick={()=>{
                                                setView(true)
                                                setId(c.id)
                                            }}>
                                                <FaRegEye/>
                                            </button>
                                            <button>
                                                <FaTrashAlt/>
                                            </button>
                                        </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>

                    <div>
                    <span>
                        {0} de {0}
                    </span>
                    <span>
                        <button>{"<"}</button>
                        <p>{9}</p>
                        <button>{">"}</button>
                    </span>
                </div>
            </>
            :
            <h5>Nenhum Pedido Encotrado</h5>
        }

    </main>
    );
}