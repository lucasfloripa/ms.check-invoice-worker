import { asyncHandler } from '@middlewares/asyncHandler'
import { ErrorResponse } from '@utils/ErrorResponse'
import { NextFunction, Request, Response } from 'express'
import { ICheckBoletoRequestDTO } from './CheckBoletoDTO'
import { CheckBoletoUseCase } from './CheckBoletoUseCase'

class CheckBoletoController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private checkBoletoUseCase: CheckBoletoUseCase
  ) {}

  handle = asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
    const checkBoletoDTO = request.body as ICheckBoletoRequestDTO

    const { dataFrom, dataUntil } = checkBoletoDTO

    if (!dataFrom) {
      return next(new ErrorResponse('Insert data from', 400))
    }

    if (!dataUntil) {
      return next(new ErrorResponse('Insert data from', 400))
    }

    const res = await this.checkBoletoUseCase.execute(checkBoletoDTO)

    return response.json({ res })
  })
}

export { CheckBoletoController }
