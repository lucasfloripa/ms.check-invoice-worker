import { ICheckBoletoProvider } from '@providers/ICheckBoletoProvider'
import { ICheckBoletoRequestDTO } from './CheckBoletoDTO'

class CheckBoletoUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private checkBoletoProvider: ICheckBoletoProvider
  ) {}

  async execute (checkBoletoDTO: ICheckBoletoRequestDTO) {
    const loginResponse = await this.checkBoletoProvider.auth()

    const response = await this.checkBoletoProvider.check(checkBoletoDTO, loginResponse.token)

    return response
  }
}

export { CheckBoletoUseCase }
