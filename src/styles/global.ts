import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme['gray-600']};
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
        line-height: 140%;
        font-size: 1em;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${({ theme }) => theme.purple};
    }

    input {
        ${({ theme }) => css`
          background-color: ${theme['gray-500']};
          color: ${theme['gray-100']};
          border: ${theme['gray-700']};
        `};

        padding: 1em;
        border-radius: 8px;
    }

    button.primary {
        ${({ theme }) => css`
          background-color: ${theme['blue-dark']};
          color: ${theme['gray-100']};
        `};

        padding: 1em;
        border-radius: 8px;
        border: none;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        gap: 8px;
        cursor: pointer;

        transition-duration: 0.5s;
        transition-property: background-color;

        &:hover {
            ${({ theme }) => css`
              background-color: ${theme.blue};
            `};
        }
    }
`
