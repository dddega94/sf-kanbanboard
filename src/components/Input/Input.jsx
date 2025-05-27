import React from 'react'
import css from './input.module.css'

export default function Input(props) {

    return (
        <input className={css.input} {...props}>
        
        </input>        
    )
}