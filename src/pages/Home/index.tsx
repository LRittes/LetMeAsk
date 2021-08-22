import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIcon from '../../assets/images/google-icon.svg'
import { Btn } from '../../components/Btn'

import './auth.scss'

const Home = () => {
    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração troca de respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Letmeask" />
                    <button className='create-room'>
                        <img src={googleIcon} alt="Logo Google" />
                    </button>
                    <div className='separator'>Ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder='Digite o código da sala'
                        />
                        <Btn type='submit'>
                            entrar na sala
                        </Btn>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Home;