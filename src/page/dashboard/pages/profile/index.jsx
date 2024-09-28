
import { useContext } from "react";
import { UserContext } from "../../../../context/userData";
import './index.css'
import { FaCamera , FaUserAlt  , FaLock  , FaAddressBook , FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'
export default function Profile() {

    const {userData , setUserData} = useContext(UserContext)

    return (
        <main id="Avaliacao">
            <form>

                <span id="file">
                    <input type="file" onChange={(e)=>{


                        //verificando se é uma imagem
                        if(e.target.files[0].type.includes("image")){
                            const url = URL.createObjectURL(e.target.files[0])
                            setUserData( prev =>({...prev  , profile : url }))
                        }else{
                            return toast.error("Envie uma Imagem!")
                        }
                    }}/>
                    <img src={userData?.profile}/>
                    <p>
                        <FaCamera/>
                    </p>
                </span>

                <article>
                    <div>
                        <FaUserAlt/>
                        <label htmlFor="name">Nome</label>
                        <input placeholder="Seu nome" type="text" name="name" id="name" value={userData.name}/>
                    </div>
                    <div>
                        <FaLock/>
                        <label htmlFor="password">Senha</label>
                        <input placeholder="sua senha" type="password" name="password" id="password" value={userData.pass}/>
                    </div>
                    <div>
                        <FaPaperPlane/>
                        <label htmlFor="email">Email</label>
                        <input placeholder="exemplo@gmail.com" type="email" name="email" id="email" value={userData.email}/>
                    </div>
                    <div>
                        <FaAddressBook/>
                        <label htmlFor="adress">Endereço</label>
                        <input placeholder="seu endereço" type="text" name="adress" id="adress" value={userData.adress}/>
                    </div>
                </article>
                <div>
                    <button>Salvar</button>
                    <button>Cancelar</button>
                </div>
            </form>

        </main>
    );
}