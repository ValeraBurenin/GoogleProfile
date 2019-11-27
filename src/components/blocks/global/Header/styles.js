import styled from 'styled-components'

export default styled.header`
  h1{
    font-size: 2rem;
    margin: 0;
    align-self: center;
  }

  Button{
    font-size: ${props => props.theme.fontSizes.big};
    color: ${props => props.theme.colors.font};
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none;
    font-weight: bolder;
  }

  a:visited{
    color: ${props => props.theme.colors.font};

  }
  a:active{
    color: ${props => props.theme.colors.font};
  }

  a:hover{
    color: ${props => props.theme.colors.fontLighten};
  }
`
