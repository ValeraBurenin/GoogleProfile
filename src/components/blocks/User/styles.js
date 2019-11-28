import styled from 'styled-components'

export default styled.div`
  background: #EDEEF0;
  padding: ${props => props.theme.padding.big};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  img {
    height: ${props => props.theme.imgSizes.normal};
    border: ${props => props.theme.border.standart};
    padding: ${props => props.theme.padding.big};
    width: ${props => props.theme.imgSizes.normal};
  }

  h3 {
    margin: ${props => props.theme.margin.none};
  }

  ${props => props.theme.breakPoints.tablet}; {
    flex-direction: row;

    img {
      margin-right: ${props => props.theme.margin.verySmall};
    }
  }

  ${props => props.theme.breakPoints.mobile} {
    flex-direction: column;
    align-items: center;

    img {
      margin-right: ${props => props.theme.margin.none};
    }
  }
`
