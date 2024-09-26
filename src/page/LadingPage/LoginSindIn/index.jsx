
import { BiUser  , BiLock} from 'react-icons/bi';
import { useRef} from 'react';

import './index.css'
export default function LoginSindIn() {
    const ref1 = useRef()
    const ref2 = useRef()
return (
    <main id="loginSingIn">
        <article>
            <form ref={ref1} id='form1'>
                        <h1>Login</h1>
                        <aside>
                            <i>
                                <BiUser/>
                            </i>
                            <label>Email</label>
                            <input type='email' placeholder='exemplo@gmail.com'/>
                        </aside>
                        <aside>
                            <i>
                                <BiLock/>
                            </i>
                            <label>Senha</label>
                            <input type='password' placeholder='Sua senha'/>
                        </aside>
                        <div>
                            <label htmlFor='remeber'>Lembrar dos meus Dados</label>
                            <input type='checkbox' name='remeber' id='remeber'/>
                        </div>
                        <div>
                        <button onClick={()=>{

                        }}>Entrar</button>
                        <button onClick={(e)=>{
                            e.preventDefault()
                            ref1.current?.classList.add("Open")
                            
                            ref2.current?.classList.add("Open")
                        }}>Criar Conta</button>
                        </div>
                        <a>Esqueceu a sua Conta?</a>
            </form>
            <form ref={ref2} id='form2'>
            <h1>SingIn</h1>
                        
                        <aside>
                            <i>
                                <BiUser/>
                            </i>
                            <label>Nome</label>
                            <input type='text' placeholder='exemplo@gmail.com'/>
                        </aside>

                        <aside>
                            <i>
                                <BiUser/>
                            </i>
                            <label>Email</label>
                            <input type='email' placeholder='exemplo@gmail.com'/>
                        </aside>
                        <aside>
                            <i>
                                <BiLock/>
                            </i>
                            <label>Senha</label>
                            <input type='password' placeholder='Sua senha'/>
                        </aside>
                        <div>
                        <button  onClick={(e)=>{
                            e.preventDefault()
                            
                            ref2.current?.classList.remove("Open")
                            setTimeout(()=>{
                                ref1.current?.classList.remove("Open")
                            },100)
                        }}>Entrar</button>
                        <button onClick={()=>{
                        }}>Criar Conta</button>
                        </div>
            </form>
        </article>
    </main>
);
}