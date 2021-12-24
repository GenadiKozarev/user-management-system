import React, {useState} from 'react'
import './AddEdit.css'
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";

const initialState = {
    name: "",
    email: "",
    contact: ""
}

const AddEdit = () => {
    const [state, setState] = useState(initialState)
    const { name, email, contact } = initialState
    const history = useHistory()

    const addContact = async (data) => {
        const response = await axios.post('http://localhost:5000/user', data)
        if (response.status === 200) {
            toast.success(response.data)
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !contact) {
            toast.error('Please fill in all fields.')
        } else {
            addContact(state)
            history.push('/')
        }
    }
    
    const handleInputChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        setState({...state, [name]: value})
    }

    return (
        <div className="container">
            <form className="editUserForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter name..."
                       onChange={handleInputChange} value={name.value} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter email..."
                       onChange={handleInputChange} value={email.value} />

                <label htmlFor="contact">Contact</label>
                <input type="number" id="contact" name="contact" placeholder="Enter contact number..."
                       onChange={handleInputChange} value={contact.value} />

                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddEdit