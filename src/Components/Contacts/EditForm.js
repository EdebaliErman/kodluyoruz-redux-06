import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateContact } from '../../redux/contactsSlice'

function EditForm({ contact,navigate }) {
    const [name, setName] = useState(contact.name)
    const [number, setNumber] = useState(contact.phone_number)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !number) return false
        dispatch(updateContact({
            id: contact.id,
            changes: {
                name,
                phone_number:number
            }
        }))

        navigate('/')
    }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name.toString()}
                />
                <br />
                <input
                    type='tel'
                    onChange={(e) => setNumber(e.target.value)}
                    value={number.toString()}
                />

                <br />
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default EditForm
