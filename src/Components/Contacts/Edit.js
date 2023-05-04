import React from 'react'
import { useParams, redirect, useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import EditForm from './EditForm'
import { contactsSelector } from '../../redux/contactsSlice'

function Edit() {
  const { id } = useParams()
  const contact = useSelector((state) => contactsSelector.selectById(state, id))
  const navigate = useNavigate()

  if (!contact) {
    return <Link to={"/"}>
      <svg style={{color:"black", }} xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
      </svg></Link>
  }

  return (
    <div>
      <h1>Edit</h1>
      <EditForm contact={contact} navigate={navigate} />
    </div>
  )
}

export default Edit
