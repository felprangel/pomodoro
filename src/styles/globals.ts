import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --white-shadow: #EBEBEB;
    --pomodoro: #ba4949;
    --pomodoro-light: #c15c5c;
    --break-time: #38858A;
    --break-time-light: #4C9196;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    min-height: 100vh;
  }

  input,
  textarea,
  button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
    border-radius: 0.1rem;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`
