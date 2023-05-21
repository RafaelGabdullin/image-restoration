import { ApiConnection } from '../ApiConnection'
import { SignUpRequest, UserSchema } from './User.types'

class UserService {
  static get RoutePrefix(): string {
    return '/users'
  }

  static async signUp(data: SignUpRequest) {
    const response = await ApiConnection.post<UserSchema>(`${this.RoutePrefix}`, data)
    return response.data
  }

  static async getMe() {
    const response = await ApiConnection.get<UserSchema>(`${this.RoutePrefix}/me`)
    return response.data
  }
}

export default UserService
