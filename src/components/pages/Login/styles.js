import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: auto;

  h3 {
    padding: ${props => props.theme.padding.big};
    margin: auto;
  }
`

export const H3 = styled.h3`
  position: absolute;
  bottom: ${props => props.theme.padding.big};
  left: ${props => props.theme.padding.verySmall};
  padding: ${props => props.theme.padding.verySmall} ${props => props.theme.padding.big};
`
