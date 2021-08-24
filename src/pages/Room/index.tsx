import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import { Btn } from '../../components/Btn';
import Question from '../../components/Question';
import RoomCode from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import useRoom from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import "./style.scss"

type RoomParams = {
    id: string;
}

const Room = () => {
    const [newQuestion, setNewQuestion] = useState('')
    const { user } = useAuth()
    const params = useParams<RoomParams>()
    const roomId = params.id
    const { questions, title } = useRoom(roomId)
    
    

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault()
        
        if(newQuestion.trim() === ''){
            return
        }

        if(!user){
            throw new Error('Você deve está logado!')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAswered: false
        }

        await database.ref(`rooms/${roomId}/questions`).push(question)

        setNewQuestion('')
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="logo Letmeask" />
                    <RoomCode code={roomId}/>
                </div>
            </header>
            <main className="content">
                <div className="room-title">
                    <h1>{title}</h1>
                    {questions.length > 0 && <span>{questions.length} perguntas</span>}
                </div>
                <form onSubmit={handleSendQuestion}>
                    <textarea
                        placeholder="O que você quer perguntar?"
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />
                    <div className="form-footer">
                        {user ? (
                            <div className='user-info'>
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                        )}
                        <Btn type="submit" disabled={!user}>Enviar pergunta</Btn>
                    </div>
                </form>
                
                <div className="questions-list">
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default Room;