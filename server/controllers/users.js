const { v4: uuidv4 } = require('uuid')

let users = []

const getUsers = (req, res) => {
    res.send(users)
}

const createUser = (req, res) => {
    const user = req.body

    users.push({...user, id: uuidv4()})
    res.send('User added successfully.')
}

const getUserById = (req, res) => {
    const singleUser = users.filter((user) => user.id === req.params.id)
    res.send(singleUser)
}

const deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id)
    res.send('User deleted successfully.')
}

const editUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id)

    user.name = req.body.name
    user.email = req.body.email
    user.contact = req.body.contact

    res.send('User edited successfully.')
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    editUser
}