import React from 'react'
import Form from './Form'
import List from './List'
import "../../App.css"
import { useSelector } from 'react-redux'
import { contactsSelector } from '../../redux/contactsSlice'
function Contacts() {
  const total = useSelector(contactsSelector.selectTotal)
  return (
    <div >
      <h1>Contacts {total > 0 && (total)}</h1>
      <Form />
      <List />
    </div>
  )
}

export default Contacts
