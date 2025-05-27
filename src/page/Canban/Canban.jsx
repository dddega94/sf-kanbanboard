import React, { useState } from 'react'
import Tasks from '../../components/Tasks/'
import css from './canban.module.css'
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/select';


export default function Canban(props) {
  const { mosk, setMosk } = props
  const [inputTaskName, setInputTaskName] = useState('')
  const [openForm, setOpenForm] = useState(false)
  const [formValid, setFormValid] = useState(false)

  function openCreateTask() {
    setOpenForm(!openForm)
  }

  const isFormValidated = () => {
    if (inputTaskName !== '') {
      setFormValid(!formValid)
      return true
    } else {
      setFormValid(!formValid)
      return false
    }
  }

  function addTask(e) {
    e.preventDefault()
    if (isFormValidated()) {
      const newTask = {
        status: 'Backlog',
        id: mosk.length + 1,
        name: inputTaskName,
        description: 'This task has no description'
      }
      setMosk([...mosk, newTask])
      setInputTaskName('')
      openCreateTask()
    }
  }

  function changeTaskReady(e) {
    setMosk(mosk.map(item => {
      // eslint-disable-next-line
      if (item.id == e && item.status === 'Backlog') {
        return { ...item, status: 'Ready' };
      } else {
        return { ...mosk, ...item };
      }
    }     
    ))
  }

  function changeTaskProgress(e) {
    setMosk(mosk.map(item => {
      // eslint-disable-next-line
      if (item.id == e && item.status === 'Ready') {
        return { ...item, status: 'In progress' };
      } else {
        return { ...mosk, ...item };
      }
    }
    ))
  }

  function changeTaskFinished(e) {
    setMosk(mosk.map(item => {
      // eslint-disable-next-line
      if (item.id == e && item.status === 'In progress') {
        return { ...item, status: 'Finished' };
      } else {
        return { ...mosk, ...item };
      }
    }
    ))
  }  

   return (
    <div className={css.cards}>

      <div className={css.cardItem}>
        <div className={css.card_backlog}>
          <p className={css.taskName}>Backlog</p>
          <Tasks statusTask='Backlog' mosk={mosk} />
          {openForm ? '' :
            <Button onClick={openCreateTask} >+ Add card</Button>}
          {openForm &&
            <Input placeholder='New task title...'
              value={inputTaskName}
              onChange={e => setInputTaskName(e.target.value)} />}
           {openForm && <Button onClick={addTask} valid={inputTaskName}>Submit</Button>}
        </div>

        <div className={css.card_ready}>
          <p className={css.taskName}>Ready</p>
          <Tasks statusTask='Ready' mosk={mosk} />
           <Select statusTask='Backlog' mosk={mosk} onChange={changeTaskReady}></Select>
        </div>

        <div className={css.card_progress}>
          <p className={css.taskName}>In Progress</p>
          <Tasks statusTask='In progress' mosk={mosk} />
           <Select statusTask='Ready' mosk={mosk} onChange={changeTaskProgress}></Select>
        </div>

        <div className={css.card_finished}>
          <p className={css.taskName}>Finished</p>
          <Tasks statusTask='Finished' mosk={mosk} />
           <Select statusTask='In progress' mosk={mosk} onChange={changeTaskFinished}></Select>
        </div>

      </div>
    </div>
  ) 
}