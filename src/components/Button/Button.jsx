import React from 'react'
import css from './button.module.css'

export default function Button({ children, ...props }) {

    const { valid } = props

    return (
            <button {...props} className={`${css.button} ${valid && css.active }`}>
                {children}
            </button>

    )
}