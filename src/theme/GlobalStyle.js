import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.font};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSizes.normal};
    margin: ${props => props.theme.margin.none};
  }

  #root {
    display: flex;
    flex-direction: column;
    height:  ${props => props.theme.width.fullVh};
  }

  main {
    width: ${props => props.theme.width.hundred};;
    display: flex;
    flex-grow: 1;
    position: relative;
  }

  header {
    background: ${props => props.theme.colors.backgroundPrimary};
    padding: ${props => props.theme.fontSizes.big};
    width: ${props => props.theme.width.hundred};
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer {
    background: ${props => props.theme.colors.backgroundPrimary};
    color: ${props => props.theme.colors.white};
    width: ${props => props.theme.width.hundred};
  }

  h3, p {
    margin: ${props => props.theme.margin.none};
    padding: ${props => props.theme.padding.none};
  }

  ${props => props.theme.breakPoints.tablet}{
    main {
      flex-direction: column;
    }
  }
`
