import styled from 'styled-components'

export default styled.div`
  background: #EDEEF0;
  padding: ${props => props.theme.padding.big};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  img {
    height: 100px;
    border: 1px solid #000;
    padding: ${props => props.theme.padding.big};
    width: 100px;
  }

  h3 {
    margin: 0;
  }

  @media(max-width: 640px) {
    flex-direction: row;

    img {
      margin-right: 10px;
    }
  }

  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;

    img {
      margin-right: 0px;
    }
  }
`
