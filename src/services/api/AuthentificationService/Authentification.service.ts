import { ApiConnection } from '../ApiConnection'
import { LoginRequest, LoginResponse } from './Authentification.types'

class AuthentificationService {
  static get RoutePrefix(): string {
    return '/auth'
  }

  static async login(data: LoginRequest) {
    const fd = new FormData()

    fd.append('username', data.username)
    fd.append('password', data.password)
    const response = await ApiConnection.postForm<LoginResponse>(`${this.RoutePrefix}/login`, fd)
    return response.data
  }

  static async logout() {
    await ApiConnection.delete(`${this.RoutePrefix}/logout`)
  }
}

export default AuthentificationService
