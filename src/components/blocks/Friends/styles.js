import styled from 'styled-components'

export default styled.div`
  padding: ${props => props.theme.padding.big};
  width: ${props => props.theme.width.hundred};
  box-sizing: border-box;

  h3 {
    font-size: ${props => props.theme.fontSizes.veryBig};
    margin: ${props => props.theme.margin.none};
    font-weight: ${props => props.theme.fontWeights.bold};
    text-align: right;
  }

  ul {
    padding: ${props => props.theme.padding.none};
  }

  li {
    font-size: ${props => props.theme.fontSizes.big};
    border-bottom: ${props => props.theme.border.bold};
    padding: ${props => props.theme.padding.big} ${props => props.theme.padding.verySmall};;
    list-style-type: none;
  }

  p {
    color: darkblue;
    text-decoration: none;

    &:hover {
      opacity: ${props => props.theme.opacity.almostStandard};
    }
  }
`
