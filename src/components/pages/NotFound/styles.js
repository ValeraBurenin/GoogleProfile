import styled from 'styled-components'

export default styled.div`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.font};
  font-size: ${props => props.theme.fontSizes.weryBig};
  padding: ${props => props.theme.unit.quadriple};
  margin: auto;

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    display: inline-block;
  }
`
