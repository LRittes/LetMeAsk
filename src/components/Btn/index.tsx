import { ButtonHTMLAttributes } from 'react'

import './style.scss'

type btnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Btn({ isOutlined = false, ...props }: btnProps) {
    return (
        <button 
            className={`btn ${isOutlined ? 'outlined' : ''}`} 
            {...props}
        />
    )
}