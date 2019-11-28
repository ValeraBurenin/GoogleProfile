import styled from 'styled-components'

export default styled.footer`
  p {
    margin: ${props => props.theme.padding.none};
    color: ${props => props.theme.colors.font};
    padding: ${props => props.theme.fontSizes.big};
    font-size: ${props => props.theme.fontSizes.veryBig};
    text-align: right;
  }
`
