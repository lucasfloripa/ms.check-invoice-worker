import { Router } from 'express'

const authRouter = Router()

authRouter.route('/auth').post()

export { authRouter }
