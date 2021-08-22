import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import { Btn } from '../../components/Btn'

import './style.scss'

const NewRoom = () => {
    const { user } = useAuth()

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
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                            type="text" 
                            placeholder='Nome da sala'
                        />
                        <Btn type='submit'>
                            Criar sala
                        </Btn>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}

export default NewRoom;