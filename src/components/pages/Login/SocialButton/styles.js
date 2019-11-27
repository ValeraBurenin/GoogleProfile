import styled from 'styled-components'

export default styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  button {
    padding: ${props => props.theme.padding.verySmall} ${props => props.theme.padding.big};
    background: ${props => props.theme.colors.backgroundPrimary};
    border: 1px solid black;
    borderRadius: 3px;
    display: inline-block;
    margin: 5px;
    text-align: center;
    cursor: pointer;
    transition: all .2s ease;
  }

  button:active {
    color: ${props => props.theme.colors.font};
  }

  button:hover {
    background: ${props => props.theme.colors.fontLighten};
    color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.backgroundPrimary};
  }
`
