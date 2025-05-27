import React, { useState, useEffect } from 'react'
import css from './select.module.css'

const Select = ({ mosk, statusTask, onChange }) => {

    const [disSel, setDisSel] = useState()

    useEffect(() => {
        // eslint-disable-next-line
        mosk.map(item => {
            const lenght = mosk.filter(task => task.status === statusTask)
            setDisSel(Object.values(lenght).length)
        })
    })

    return (
        <>
            {disSel === 0 ?
                <select disabled className={css.select}></select>
                :
                <select className={css.select}
                    onChange={e => onChange(e.target.value)}
                >
                    <option className={css.option}></option>
                    {mosk.map(option => (
                        statusTask === option.status &&
                        <option
                            className={css.option}
                            key={option.id}
                            value={option.id}
                        >
                            {option.name}
                        </option>
                    ))}
                </select>
            }
        </>
    );


}


export default Select;