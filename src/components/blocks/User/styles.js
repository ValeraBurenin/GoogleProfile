import styled from 'styled-components'
import { Avatar } from 'antd'

export const AntAvatar = styled(Avatar)`

  &.avatar {
    width: 200px;
    height: 200px;
  }

  background: ${props => props.theme.colors.backgroundDark};
  padding: ${props => props.theme.padding.big};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.backgroundDark};
  padding: ${props => props.theme.padding.big};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 10px;
  }
`
