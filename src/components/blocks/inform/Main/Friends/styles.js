import styled from 'styled-components'

export default styled.div`
  padding: ${props => props.theme.padding.big};
  width: 100%;
  box-sizing: border-box;

  h3 {
    font-size: ${props => props.theme.fontSizes.veryBig};
    font-weight: bold;
    text-align: right;
    margin: 0;
  }

  ul {
    padding: 0;
  }

  li {
    font-size: ${props => props.theme.fontSizes.big};
    border-bottom: 2px solid  #000;
    padding: 20px 10px 20px;
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
