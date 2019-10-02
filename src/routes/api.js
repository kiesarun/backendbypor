import { Router } from 'express'
import User from './user'
import Address from './address'

const router = Router()

router.use('/user', User)
router.use('/address', Address)

export default router