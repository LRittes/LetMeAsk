import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Btn } from '../../components/Btn';
import Question from '../../components/Question';
import RoomCode from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import useRoom from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'

import "./style.scss"

type RoomParams = {
    id: string;
}

const AdmRoom = () => {
    const [newQuestion, setNewQuestion] = useState('')
    const { user } = useAuth()
    const params = useParams<RoomParams>()
    const roomId = params.id
    const { questions, title } = useRoom(roomId)

    async function handleDeleteQuestion(questionId: string){
        if(window.confirm('Deseja remover a pergunta?')){
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="logo Letmeask" />
                    <div>
                        <RoomCode code={roomId}/>
                        <Btn isOutlined >Encerrar sessão</Btn>
                    </div>
                </div>
            </header>
            <main className="content">
                <div className="room-title">
                    <h1>{title}</h1>
                    {questions.length > 0 && <span>{questions.length} perguntas</span>}
                </div>
                
                <div className="questions-list">
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >
                                <button
                                    type='button'
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>
                            </Question>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default AdmRoom;