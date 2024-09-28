
import { useContext } from "react";
import { UserContext } from "../../../../context/userData";
import './index.css'
export default function Avaliacao() {

    const {userData} = useContext(UserContext)

    return (
        <main id="Avaliacao">

            <form>
                <img src={userData?.profile}/>
                <p>{userData?.name}</p>
                <p>{userData?.email}</p>
                <textarea placeholder="Mensagem"required></textarea>
                <select >
                    <option>Quantidade de Estrelas</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <div>
                    <button>Avaliar</button>
                    <button>Cancelar</button>
                </div>
            </form>

        </main>
    );
}