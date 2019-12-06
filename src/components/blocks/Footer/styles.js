import styled from 'styled-components'

export default styled.footer`
  p {
    color: ${props => props.theme.colors.font};
    padding: ${props => props.theme.fontSizes.big};
    font-size: ${props => props.theme.fontSizes.veryBig};
    margin: 0;
    text-align: right;
  }
`
