import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import css from './task.module.css'
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const Task = (props) => {
  const { mosk, setMosk } = props
  const { id } = useParams()
  const [taskItem, setTaskItem] = useState([])

  const [openForm, setOpenForm] = useState(false)
  const [inputDescription, setInputDescription] = useState()


  useEffect(() => {
    mosk.map((item) => {
      // eslint-disable-next-line
      if (item.id == id) {
        setTaskItem(item)
      } return true
    })
  }, [mosk, id])

  function openFormEdit() {
    setOpenForm(!openForm)
  }

  function saveChange() {
    setMosk(mosk.map(item => {
      // eslint-disable-next-line
      if (item.id == id) {
        return { ...item, description: inputDescription };
      } else {
        return { ...mosk, ...item };
      }
    }
    ))
    openFormEdit()
  }



  return (
    taskItem.length !== 0 && taskItem !== 0 ?
      <div className={css.body}>
        <div className={css.task}>
          <div className={css.title}>
            <div className={css.name}>{taskItem.name}</div>
            <div className={css.close}><Link to={`/`}>&#10006;</Link></div>
          </div>

          {openForm ?
            <div>
              <p><input
                className={css.input}
                onChange={e => setInputDescription(e.target.value)}
                defaultValue={taskItem.description}
              /></p>
              <Button onClick={saveChange}>Сохранить</Button>
            </div> :
            <div>
              <p className={css.description}>{taskItem.description ? taskItem.description : 'This task has no description' }</p>
              <Button onClick={openFormEdit}>Редактировать</Button>
            </div>
          }
        </div>
      </div>
      : <NotFound />
  )
}

export default Task;