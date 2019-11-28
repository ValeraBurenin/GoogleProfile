import styled from 'styled-components'

export default styled.header`
  h1{
    font-size: ${props => props.theme.fontSizes.veryBig};
    margin: ${props => props.theme.margin.none};
    align-self: center;
  }

  Button{
    font-size: ${props => props.theme.fontSizes.big};
    color: ${props => props.theme.colors.font};
    margin: ${props => props.theme.margin.none};
    padding: ${props => props.theme.padding.none};
  }

  a{
    text-decoration: none;
    font-weight: ${props => props.theme.fontWeights.bold};
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
