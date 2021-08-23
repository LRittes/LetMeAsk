import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIcon from '../../assets/images/google-icon.svg'
import { Btn } from '../../components/Btn'

import './style.scss'

import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'

const Home = () => {
    const history = useHistory()
    const { user, singInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('')

    async function handleCreateRoom(){
        if(!user){
           await singInWithGoogle()
        }
        history.push('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if(roomCode.trim() === ''){
            return
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get()

        if(!roomRef.exists()){
            alert('A sala não existe')
            return;
        }

        history.push(`/rooms/${roomCode}`)
    }

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
                    <button className='create-room' onClick={handleCreateRoom}>
                        <img src={googleIcon} alt="Logo Google" />
                        Crie uma sala com Google
                    </button>
                    <div className='separator'>Ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                            type="text" 
                            placeholder='Digite o código da sala'
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
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