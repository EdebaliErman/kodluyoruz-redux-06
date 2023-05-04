import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactsSlice'
import { nanoid } from '@reduxjs/toolkit'
function Form() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const dispacth = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !number) return false
        dispacth(
            addContact(
                {
                    id: nanoid(),
                    name,
                    phone_number:
                        number
                }))
        setName('')
        setNumber('')
    }
    return (<div className='form'>
        <form onSubmit={handleSubmit}>
            <input value={name}
                type='text'
                placeholder='neme'
                onChange={(e) => setName(e.target.value)} />
            <br />
            <input 
            type='tel'
            placeholder='tel number' value={number} onChange={e => setNumber(e.target.value)} />
            <br />
            <button type='submit'>Add</button>
        </form>
    </div>
    )
}

export default Form
