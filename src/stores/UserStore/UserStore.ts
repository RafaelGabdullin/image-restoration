import { Role, getEmptyRole } from '@/services/types'
import { makeAutoObservable, runInAction } from 'mobx'
import { SerializedUserStore, Tokens } from './types'
import { IRootStore } from '../RootStore/RootStore'
import { LoginRequest } from '@/services/api/AuthentificationService/Authentification.types'
import AuthentificationService from '@/services/api/AuthentificationService/Authentification.service'
import { getToken } from '@/services/api/ApiConnection'
import { SignUpRequest, UserSchema } from '@/services/api/UserService/User.types'
import UserService from '@/services/api/UserService/User.service'

class UserStore implements SerializedUserStore {
  rootStore: IRootStore

  userId: string
  username: string
  role: Role
  createdAt: string
  updatedAt: string

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore
    this.userId = ''
    this.username = ''
    this.createdAt = ''
    this.updatedAt = ''
    this.role = getEmptyRole()
    makeAutoObservable(this)
  }

  hydrate(serializedStore: Partial<SerializedUserStore>) {
    this.userId = serializedStore.userId ?? ''
    this.username = serializedStore.username ?? ''
    this.createdAt = serializedStore.createdAt ?? ''
    this.updatedAt = serializedStore.updatedAt ?? ''
    this.role = serializedStore.role ?? getEmptyRole()
  }

  static updateTokens(tokenData: Partial<Tokens>) {
    if (tokenData.accessToken) localStorage.setItem('PortalAccessToken', tokenData.accessToken)
    if (tokenData.refreshToken) localStorage.setItem('PortalRefreshToken', tokenData.refreshToken)
  }

  updateUserDataFromSchema(userSchema: UserSchema) {
    runInAction(() => {
      this.userId = userSchema.id
      this.username = userSchema.username
      this.role = userSchema.role
      this.createdAt = userSchema.created_at
      this.updatedAt = userSchema.updated_at
    })
  }

  async loginHandler(userData: LoginRequest): Promise<void> {
    const data = await AuthentificationService.login(userData)
    UserStore.updateTokens({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    })
    const userDataResponse = await UserService.getMe()
    this.updateUserDataFromSchema(userDataResponse)
  }

  async signUpHadler(userData: SignUpRequest): Promise<void> {
    await UserService.signUp(userData)
    await this.loginHandler(userData)
  }

  get isAuthorized() {
    return !!this.userId || !!getToken()
  }
}

export default UserStore
