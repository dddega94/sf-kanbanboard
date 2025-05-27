import React from 'react'
import css from "./header.module.css"
import userLogo from "./img/user-logo.svg"
import arrow from "./img/arrow.svg"
import { Link } from 'react-router-dom';

export default function Header(props) {

  const { drop, dropMenu } = props

  return (
    <>
      <header className={css.header}>
        <div className={css.title}><Link to={`./`}>Awesome Kanban Board</Link></div>
        <div className={css.user}>
          <div className={css.user__logo}>
            <img className={css.user__logo_img} src={userLogo} alt="" />
            {drop &&
              <div className={css.menu}>
                <p className={css.p}>Profile</p>
                <p className={css.p}>Log Out</p>
              </div>
            }
          </div>
          <div className={css.user__drop} onClick={dropMenu}>
            {drop ?
              <img className={css.user__drop_arrow_active} src={arrow} alt="" />
              :
              <img className={css.user__drop_arrow} src={arrow} alt="" />
            }
          </div>
        </div>
      </header>
    </>
  )
}