/* eslint-disable camelcase */
interface pagination {
  total: Number,
  total_per_page: Number,
  total_pages: Number,
  showing_total_of: string,
  actual_page: Number,
  actual_page_url: string,
  next_page: Number,
  next_page_url: string,
  previous_page: Number,
  previous_page_url: string
}

interface boletos {
  beneficiario_nome: string,
  pagador_inscricao: string,
  pagador_nome: string,
  documento_numero: string,
  documento_nosso_numero: string,
  documento_data_emissao: string,
  documento_data_vencimento: string,
  documento_valor: string,
  documento_situacao: Number
  documento_link: string,
  documento_linha_digitavel: string
  documento_codigo_barras: string
}

export interface ICheckBoletoResponse {
  code: Number
  status: string,
  message: string,
  pagination: pagination,
  boletos?: boletos[]
}

export interface IDadosConsulta {
  documento_data_emissao_de: string
  documento_data_emissao_ate: string
}
