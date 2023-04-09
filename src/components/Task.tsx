import styled, { css } from 'styled-components'
import Check from '../assets/Check.svg'
import Trash from '../assets/Trash.svg'

interface TaskProps {
  index: number
  content: string
  concluded: boolean
  toggleTask: (index: number) => void
  deleteTask: (index: number) => void
}

export function Task({
  index,
  content,
  concluded,
  toggleTask,
  deleteTask,
}: TaskProps) {
  return (
    <Container concluded={!!concluded}>
      <TaskRadioButton
        concluded={!!concluded}
        onClick={() => toggleTask(index)}
      >
        {concluded && <img src={Check} alt="check task" />}
      </TaskRadioButton>

      <span>{content} </span>

      <DeleteButton onClick={() => deleteTask(index)}>
        <img src={Trash} alt="delete task" />
      </DeleteButton>
    </Container>
  )
}

const Container = styled.div<{ concluded: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 12px;

  color: ${({ theme, concluded }) =>
    concluded ? theme['gray-300'] : theme['gray-100']};
  background-color: ${({ theme }) => theme['gray-500']};
  border: 1px solid ${({ theme }) => theme['gray-400']};

  border-radius: 8px;

  padding: 16px 19px;

  > span {
    flex: 1;
    text-decoration: ${({ concluded }) =>
      concluded ? 'line-through' : 'none'};
  }
`

const TaskRadioButton = styled.button<{ concluded: boolean }>`
  margin-top: 4px;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  transition-duration: 0.5s;

  cursor: pointer;

  ${({ concluded }) =>
    concluded
      ? css`
          transition-property: background-color, color, border-color, opacity;
        `
      : css`
          transition-property: background-color, color;
        `}

  ${({ theme, concluded }) => css`
    border: 2px solid ${concluded ? theme['purple-dark'] : theme.blue};
    background-color: ${concluded ? theme['purple-dark'] : 'transparent'};
  `}

  :hover {
    ${({ theme, concluded }) =>
      concluded
        ? css`
            background-color: ${theme.purple};
            border-color: ${theme.purple};
          `
        : css`
            background-color: ${theme['blue-dark']};
          `}
  }
`

const DeleteButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  height: fit-content;
`
