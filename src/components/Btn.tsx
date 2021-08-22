import { useState } from "react";

export function Btn() {
    const [aumentar, setAumentar] = useState(0)

    function aumentou(){
        setAumentar(aumentar + 1)
    }

    return (
        <button onClick={aumentou}>{aumentar}</button>
    )
}