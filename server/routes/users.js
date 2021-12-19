import {route} from "express/lib/router";

const express = require('express')

import { getUsers, createUser } from '../controllers/users'

const router = express.Router()

router.get('/users', getUsers)

router.post('/user', createUser)