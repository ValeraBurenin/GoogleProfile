import React from 'react'
import { PropTypes } from 'prop-types'
import { contactsPropType } from '@/prop-types'
import Wrapper from './styles'
import { List, Avatar } from 'antd'

const Friends = ({ contacts }) => (
  <Wrapper>
    {contacts.length === 0
      ? <h3>No any contacts</h3>
      : (
        <>
          <h3>Your contacts</h3>
          <List
            className="contacts"
            key={contacts.id}
            itemLayout="horizontal"
            dataSource={contacts}
            bordered="true"
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<p>{item.title}</p>}
                  description={item.phone} />
              </List.Item>
            )} />
        </>
      )}
  </Wrapper>
)

Friends.propTypes = {
  contacts: PropTypes.arrayOf(contactsPropType),
}

export default Friends
