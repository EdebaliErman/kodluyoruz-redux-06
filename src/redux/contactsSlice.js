import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const contactsAdaptor = createEntityAdapter()

export const contactsSelector = contactsAdaptor.getSelectors(state => state.contacts)

const initialState = contactsAdaptor.getInitialState()

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: contactsAdaptor.addOne,
        deleteContact: contactsAdaptor.removeOne,
        removeAll: contactsAdaptor.removeAll,
        updateContact: contactsAdaptor.updateOne
    }
})

export const { addContact, deleteContact, removeAll, updateContact } = contactSlice.actions
export default contactSlice.reducer