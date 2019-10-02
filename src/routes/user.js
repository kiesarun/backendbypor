import { Router } from 'express'
import {add, get} from '../controllers/User'

const router = Router()

router.put('/', add)
router.get('/:id', get)

export default router