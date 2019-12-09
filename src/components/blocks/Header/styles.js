import styled from 'styled-components'
import { PageHeader } from 'antd'

export default styled(PageHeader)`
    display: flex;
    justify-content: space-between;
    align-items: center;

  .ant-page-header-heading {
    width: inherit;

    span {
      color: ${props => props.theme.colors.font};
    }
  }

  .ant-page-header-content {
    padding: 0;
  }
`
