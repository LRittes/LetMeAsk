import copyImg from '../../assets/images/copy.svg'

import './style.scss'

type RoomCodeProps = {
    code: string
}

const RoomCode = (props: RoomCodeProps) => {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <button className='room-code' onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}

export default RoomCode;