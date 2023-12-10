import express from 'express'
import { signup, login } from './users.controller.js'

export const router = express.Router()

router.post('/signup', signup)

router.post('/login', login)

//router.get('/:id/history', getHistory)