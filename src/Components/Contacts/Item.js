import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'
import { Link } from 'react-router-dom'

function Item({ contact }) {
  const dispacth = useDispatch()

  const handleDelete = (id) => {
    if (window.confirm("are you sure ?")) {
      dispacth(deleteContact(id))
    }
  }

  return (
    <div>
      <h3>{contact.name}</h3>
      <h3>{contact.phone_number}</h3>
      <span className='delete' onClick={() => handleDelete(contact.id)}>X</span>
      <span className='edit'>
        <Link to={`/edit/${contact.id}`}>
          ✍
        </Link>
      </span>

    </div>
  )
}

export default Item
