export const getList = array => {
  const contactsData = array.map(({ id, title, gd$phoneNumber }) => (
    { id: id.$t, title: title.$t, phone: gd$phoneNumber[0].$t }
  ))

  return contactsData
}
