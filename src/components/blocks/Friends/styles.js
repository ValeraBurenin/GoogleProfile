import styled from 'styled-components'

export default styled.div`
  padding: ${props => props.theme.padding.big};
  width: 100%;
  box-sizing: border-box;

  .contacts {
    p {
      font-size: 20px;
    }

    .ant-list-item-meta-description {
      font-size: 16px;
    }

    .ant-avatar {
      width: 80px;
      height: 80px;
    }
  }

  h3 {
    font-size: ${props => props.theme.fontSizes.veryBig};
    font-weight: ${props => props.theme.fontWeights.bold};
    margin-bottom: 10px;
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
`
