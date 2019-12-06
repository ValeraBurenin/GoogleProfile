import styled from 'styled-components'

export default styled.div`
  padding: ${props => props.theme.padding.big};
  width: 100%;
  box-sizing: border-box;

  h3 {
    font-size: ${props => props.theme.fontSizes.veryBig};
    font-weight: ${props => props.theme.fontWeights.bold};
    margin: 0;
    text-align: right;
  }

  ul {
    padding: 0;
  }

  li {
    font-size: ${props => props.theme.fontSizes.big};
    border-bottom: ${props => props.theme.border.bold} solid ${props => props.theme.colors.font};
    padding: ${props => props.theme.padding.big};
    list-style-type: none;
  }

  p {
    color: darkblue;
    text-decoration: none;

    &:hover {
      opacity: .8;
    }
  }
`
