import { ApiConnection } from '../ApiConnection'
import { SignUpRequest, UploadImagesRequest, UploadImagesResponse, UserSchema } from './User.types'

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

  static async delete(username: string) {
    const response = await ApiConnection.delete(`${this.RoutePrefix}/${username}`)
    return response.data
  }

  static async uploadImages(data: UploadImagesRequest) {
    const fd = new FormData()
    data.files.forEach((file) => {
      fd.append('files', file)
    })
    const response = await ApiConnection.postForm<UploadImagesResponse>(
      `${this.RoutePrefix}/upload_image`,
      fd
    )
    return response.data
  }
}

export default UserService
