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

    .ant-page-header-ghost {
      background: ${props => props.theme.colors.backgroundPrimary};
    }

    .ant-page-header-content {
      overflow: visible;
    }

    header {
      display: flex;
      background: ${props => props.theme.colors.backgroundPrimary};
      padding: ${props => props.theme.fontSizes.big};
      width: 100%;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
    }

    main {
      width: 100%;
      display: flex;
      flex-grow: 1;
      position: relative;
    }

    footer {
      background: ${props => props.theme.colors.backgroundPrimary};
      color: ${props => props.theme.colors.white};
      width: 100%;
    }

    a {
      color: ${props => props.theme.colors.font};

      &:hover {
        color: ${props => props.theme.colors.font};
        opacity: .8;
      }
    }

    ${props => props.theme.breakPoints.tablet}{
      main {
        flex-direction: column;
      }
    }

    #root {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }


  }



  h3, p {
    margin: 0;
    padding: 0;
  }


`
