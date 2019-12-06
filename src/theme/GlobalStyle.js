import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.font};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSizes.normal};
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  main {
    width: 100%;
    display: flex;
    flex-grow: 1;
    position: relative;
  }

  header {
    background: ${props => props.theme.colors.backgroundPrimary};
    padding: ${props => props.theme.fontSizes.big};
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer {
    background: ${props => props.theme.colors.backgroundPrimary};
    color: ${props => props.theme.colors.white};
    width: 100%;
  }

  h3, p {
    margin: 0;
    padding: 0;
  }

  ${props => props.theme.breakPoints.tablet}{
    main {
      flex-direction: column;
    }
  }
`
