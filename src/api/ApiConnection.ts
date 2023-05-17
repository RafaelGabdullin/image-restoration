import axios from 'axios'
import { MAX_FILE_SIZE } from '@/types/global'

/** Базовый URL */
export const appApiUrl = process.env.APP_API_URL

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
export const getToken = () => localStorage.getItem('PortalToken')

/** Очистка токена */
export const removeToken = () => localStorage.removeItem('PortalToken')

/** Вставка токена в хедер запроса */
ApiConnection.interceptors.request.use((config) => {
  const token = getToken()
  config.headers!.Authorization = `Bearer ${token}`
  return config
})
