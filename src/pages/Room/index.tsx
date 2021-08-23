import { useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import { Btn } from '../../components/Btn';
import RoomCode from '../../components/RoomCode';

import "./style.scss"

type RoomParams = {
    id: string;
}

const Room = () => {
    const params = useParams<RoomParams>()

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="logo Letmeask" />
                    <RoomCode code={params.id}/>
                </div>
            </header>
            <main className="content">
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>
                <form>
                    <textarea
                        placeholder="O que você quer perguntar?"
                    />
                    <div className="form-footer">
                        <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                        <Btn type="submit">Enviar pergunta</Btn>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Room;