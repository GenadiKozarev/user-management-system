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

module.exports = {
    getUsers,
    createUser
}