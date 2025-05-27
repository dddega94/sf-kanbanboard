import React from 'react';
import { Link } from 'react-router-dom'
import css from './notFound.module.css'

const NotFound = () => {
    return (
        <div className={css.body}>
            <div className={css.card}>
                <p className={css.title}>
                    Задачи не найдены. Вернуться на<Link to="/">
                        <span className={css.red}> Главную</span></Link>
                </p>
                <p>404 error</p>
            </div>
        </div>

    );
}

export default NotFound;