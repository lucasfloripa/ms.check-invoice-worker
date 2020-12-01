import { portalDeBoletosApi } from '@apis/portalDeBoletosApi'
import { IDadosBeneficiario, ILoginResponse } from '@interfaces/IAuth'
import { ICheckBoletoProvider } from '@providers/ICheckBoletoProvider'
import { ICheckBoletoResponse, IDadosConsulta } from '@interfaces/ICheckBoleto'
import { ICheckBoletoRequestDTO } from '@useCases/checkBoleto/CheckBoletoDTO'

class PortalDeBoletosProvider implements ICheckBoletoProvider {
  async check (checkBoletoRequest: ICheckBoletoRequestDTO, token: string): Promise<ICheckBoletoResponse> {
    const { dataFrom, dataUntil } = checkBoletoRequest

    if (!portalDeBoletosApi.defaults.headers.common.Authorization) {
      portalDeBoletosApi.defaults.headers.commun.Authorization = token
    }

    const dadosConsulta: IDadosConsulta = {
      documento_data_emissao_ate: dataFrom,
      documento_data_emissao_de: dataUntil
    }

    const response: ICheckBoletoResponse = await portalDeBoletosApi.post('/', dadosConsulta, { params: { page: 1 } })

    return response
  }

  async auth (): Promise<ILoginResponse> {
    const { IDENTIFICADOR, INSCRICAO } = process.env

    const dadosBeneficiario: IDadosBeneficiario = {
      identificador: IDENTIFICADOR,
      inscricao: INSCRICAO
    }

    const loginResponse: ILoginResponse = await portalDeBoletosApi.post('/auth', dadosBeneficiario)

    return loginResponse
  }
}

export { PortalDeBoletosProvider }
