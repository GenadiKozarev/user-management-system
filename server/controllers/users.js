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

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser
}