import { Router } from 'express'
import Api from './api'
import Auth from './auth'
import {ensureAuth} from '../middlewares/auth'

const router = Router()

router.use('/auth', Auth)
router.use(ensureAuth)
router.use('/api', Api)

export default router