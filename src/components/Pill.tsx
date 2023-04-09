import styled from 'styled-components'

interface PillProps {
  content: string | number
}

export function Pill({ content }: PillProps) {
  return <Container>{content}</Container>
}

const Container = styled.div`
  background-color: ${({ theme }) => theme['gray-400']};
  color: ${({ theme }) => theme['gray-200']};
  border-radius: 16px;
  padding: 0px 8px;
  height: 20px;

  font-size: 0.8em;

  width: fit-content;
`
