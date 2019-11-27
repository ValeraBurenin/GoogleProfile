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
  bottom: 20px;
  left: 20px;
  padding: 10px 20px;
`
