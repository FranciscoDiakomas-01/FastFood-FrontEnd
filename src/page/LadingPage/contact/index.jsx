import './index.css'
export default function Contact() {
    return (
    <article id='contact'>

        <form>
            <h1>Entre em contacto</h1>
            <aside>
                <label htmlFor='name'>Nome</label>
                <input type='name' name='name' id='name' placeholder='Seu nome'required />
                
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' placeholder='exemplo@gmail.com' required />
                
                <label htmlFor='text'>Mensagem</label>
                <textarea placeholder='Sua mensagem'/>
            </aside>
            <div>
                <button>Enviar</button>
            </div>
        </form>
    </article>
    );
}