import React from 'react'

export const getList = array => {
  return array.map(({ id, title, gd$phoneNumber }) => (
    <li key={id.$t}>{title.$t} <p>{gd$phoneNumber[0].$t}</p></li>
  ))
}
