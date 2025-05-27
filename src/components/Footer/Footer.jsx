import React, { useEffect }  from 'react'
import { useState } from 'react'
import css from "./footer.module.css"

export default function Footer(props) {
  const {mosk} = props

  const [taskFinished, setTaskFinished] = useState(0)
  const [taskActive, setTaskActive] = useState(0)

  useEffect(() => {
    // eslint-disable-next-line
    mosk.map(item => {
      const lenghtFin = mosk.filter(task => task.status === 'Finished')
      setTaskFinished(Object.values(lenghtFin).length)
      const lenghtAct = mosk.filter(task => task.status !== 'Finished')
      setTaskActive(Object.values(lenghtAct).length -1)
    })

  })

  return (
    
    <footer className={css.footer}>
      <div className={css.tasks}>
        <div className={css.active}>Active tasks: {taskActive}</div>
        <div className={css.finished}>Finished tasks: {taskFinished}</div>
      </div>
      <div className={css.dev}>Kanban board by Sergey, 2025</div>
    </footer>
  )
}