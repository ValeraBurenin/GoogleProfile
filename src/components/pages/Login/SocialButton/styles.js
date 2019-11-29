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
    border: ${props => props.theme.border.thin} solid ${props => props.theme.colors.font};
    border-radius: ${props => props.theme.border.bold};
    margin: ${props => props.theme.margin.verySmall};
    display: inline-block;
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
    border: ${props => props.theme.border.thin} solid
    ${props => props.theme.colors.backgroundPrimary};
  }
`
