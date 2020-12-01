import axios from 'axios'

const portalDeBoletosApi = axios.create({ baseURL: 'https://apiconsulta.portaldeboletos.com.br/api/v1' })

export { portalDeBoletosApi }
