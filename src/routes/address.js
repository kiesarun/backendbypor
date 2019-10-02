import { Router } from 'express'
import {add} from '../controllers/Address'

const router = Router()

router.put('/', add)

export default router