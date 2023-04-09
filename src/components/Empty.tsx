import styled from 'styled-components'

import TaskList from '../assets/TaskList.svg'

export function Empty() {
  return (
    <Container>
      <img src={TaskList} alt="" />
      <p>
        <b>Você ainda não tem tarefas cadastradas</b> <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-top: 1px solid red;
  border-radius: 8px;
  border-color: ${({ theme }) => theme['gray-400']};

  color: ${({ theme }) => theme['gray-300']};

  padding-top: 64px;
  margin-top: 24px;

  img {
    margin-bottom: 8px;
  }
`
