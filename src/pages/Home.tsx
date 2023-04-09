import { useState } from 'react'
import styled, { css } from 'styled-components'

import Logo from '../assets/Logo.svg'
import Plus from '../assets/Plus.svg'

import { Empty } from '../components/Empty'
import { Pill } from '../components/Pill'
import { Task } from '../components/Task'

type TaskType = {
  content: string
  concluded: boolean
}

const initialTasks: TaskType[] = [
  {
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    concluded: true,
  },
  {
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    concluded: false,
  },
]

export function Home() {
  const [newTaskContent, setNewTaskContent] = useState('')
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks)

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((task, localIndex) => localIndex !== index))
  }

  const toggleTask = (index: number) => {
    const localArray = [...tasks]
    localArray[index].concluded = !localArray[index].concluded
    setTasks(localArray)
  }

  const createTask = (e) => {
    e.preventDefault()
    setNewTaskContent('')
    setTasks([
      ...tasks,
      {
        content: newTaskContent,
        concluded: false,
      },
    ])
  }

  return (
    <>
      <Header>
        <img src={Logo} alt="" />
      </Header>

      <Content>
        <NewTask onSubmit={createTask}>
          <input
            value={newTaskContent}
            onChange={(e) => setNewTaskContent(e.target.value)}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit" className="primary">
            Criar
            <img src={Plus} alt="" />
          </button>
        </NewTask>

        <Info>
          <div>
            <span>Tarefas criadas</span>
            <Pill content={tasks.length} />
          </div>
          <div>
            <span>Concluídas</span>
            <Pill
              content={`${
                tasks.filter((task) => task.concluded === true).length
              } de ${tasks.length}`}
            />
          </div>
        </Info>

        {tasks.length === 0 ? (
          <Empty />
        ) : (
          <Tasks>
            {tasks.map((task, key) => (
              <Task
                key={key}
                index={key}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                content={task.content || ''}
                concluded={!!task.concluded}
              />
            ))}
          </Tasks>
        )}
      </Content>
    </>
  )
}

const Header = styled.div`
  ${({ theme }) => css`
    background-color: ${theme['gray-700']};
  `}

  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  max-width: 800px;
  padding: 0px 16px;
  width: 100%;

  margin: auto;
  margin-top: -30px;
`

const NewTask = styled.form`
  display: flex;
  gap: 8px;

  input {
    flex: 1;
  }
`

const Info = styled.div`
  margin-top: 64px;
  margin-bottom: 24px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: row;
    font-size: 0.875em;
    font-weight: bold;
    align-items: baseline;
    gap: 8px;

    &:nth-child(1) {
      color: ${({ theme }) => theme.blue};
    }

    &:nth-child(2) {
      color: ${({ theme }) => theme.purple};
    }
  }
`

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
