import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import css from './tasks.module.css'

export default function Tasks(props) {
    const { statusTask, mosk } = props
    const [emptyList, setEmptyList] = useState()

    useEffect(() => {
        // eslint-disable-next-line
        mosk.map(item => {
            const lenght = mosk.filter(task => task.status === statusTask)
            setEmptyList(Object.values(lenght).length)
        })
    })

    return (
       <>
       {emptyList === 0 ?
                <p>Задачи не найдены</p>
        :
                <div>
                    {mosk.map((item) => (
                        item.status === statusTask &&
                        <div className={css.item} key={item.id} >
                            <Link to={`task/${item.id}`}>
                                <p className={css.task}>{item.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>   
    
    }
       
       </>
    )
}