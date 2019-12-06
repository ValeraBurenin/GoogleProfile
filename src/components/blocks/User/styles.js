import styled from 'styled-components'

export default styled.div`
  background: ${props => props.theme.colors.backgroundDark};
  padding: ${props => props.theme.padding.big};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  img {
    height: 100px;
    border: ${props => props.theme.border.thin} solid ${props => props.theme.colors.font};
    padding: ${props => props.theme.padding.big};
  }

  h3 {
    margin: 0;
  }

  ${props => props.theme.breakPoints.tablet} {
    flex-direction: row;

    img {
      margin-right: ${props => props.theme.margin.verySmall};
    }
  }

  ${props => props.theme.breakPoints.mobile} {
    flex-direction: column;
    align-items: center;

    img {
      margin-right: 0;
    }
  }
`
