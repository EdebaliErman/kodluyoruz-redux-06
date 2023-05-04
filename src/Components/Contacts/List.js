import React from 'react'
import { contactsSelector, removeAll } from '../../redux/contactsSlice'
import { useDispatch, useSelector } from 'react-redux'
import Item from './Item'
function List() {
  const contacts = useSelector(contactsSelector.selectAll)
  const dispacth = useDispatch()
  const total = useSelector(contactsSelector.selectTotal)

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure ?")) {
      dispacth(removeAll())
    }
  }
  return (
    <ul className='list'>
      {contacts.map((contact) =>
        <li key={contact.id}>
          <Item contact={contact} />
        </li>)}{
        total > 0 &&
        <button className='clearBtn' onClick={handleDeleteAll}>Clear All</button>}
    </ul>
  )
}

export default List
