import { ButtonHTMLAttributes } from 'react'

import './style.scss'

type btnProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Btn(props: btnProps) {
    return (
        <button className='btn' {...props}/>
    )
}