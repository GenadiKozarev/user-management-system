import { v4 as uuidv4 } from 'uuid'

let users = []

const getUsers = (req, res) => {
    res.send(users)
}

export default getUsers