import { ILoginResponse } from '@interfaces/IAuth'
import { ICheckBoletoResponse } from '@interfaces/ICheckBoleto'
import { ICheckBoletoRequestDTO } from '@useCases/checkBoleto/CheckBoletoDTO'

export interface ICheckBoletoProvider {
  auth(): Promise<ILoginResponse>
  check(checkBoletoRequest: ICheckBoletoRequestDTO, token: string):Promise<ICheckBoletoResponse>
}
