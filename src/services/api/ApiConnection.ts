import axios from 'axios'
import { MAX_FILE_SIZE, isServer } from '@/types/global'

/** Базовый URL */
export const appApiUrl = 'http://localhost:80'

/** Базовые настройки axios */
export const ApiConnection = axios.create({
  baseURL: `${appApiUrl ?? ''}`,
  headers: {
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  maxContentLength: MAX_FILE_SIZE,
})

const unblobError = async (error: unknown) =>
  error instanceof Blob ? JSON.parse(await error.text()) : error

/** Порядок обработки ошибок ответа сервера */
ApiConnection.interceptors.response.use(
  (response) => {
    if (response.status === 401 || response.status === 400) {
      throw response
    }
    return response
  },
  async (error) => {
    const errors = error?.response?.data
    throw await unblobError(errors)
  }
)

/** Токен авторизации */
export const getToken = () => {
  if (isServer()) {
    return ''
  }
  return localStorage.getItem('PortalAccessToken')
}

/** Очистка токена */
export const removeToken = () => {
  if (isServer()) {
    return ''
  }
  localStorage.removeItem('PortalAccessToken')
}

/** Вставка токена в хедер запроса */
ApiConnection.interceptors.request.use((config) => {
  const token = getToken()
  config.headers!.Authorization = `Bearer ${token}`
  return config
})
