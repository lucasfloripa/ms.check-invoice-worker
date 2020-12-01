export interface ILoginResponse {
  status: string
  message: string
  token: string
}

export interface ICredentials {
  identifier: string
  subscription: string
}

export interface IDadosBeneficiario {
  identificador: string
  inscricao: string
}

export interface ILogin {
  dadosBeneficiario: IDadosBeneficiario
}
