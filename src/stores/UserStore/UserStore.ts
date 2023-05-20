import { Role, getEmptyRole } from '@/services/types'
import { makeAutoObservable } from 'mobx'
import { SerializedUserStore, Tokens } from './types'
import { IRootStore } from '../RootStore/RootStore'
import { LoginRequest } from '@/services/api/AuthentificationService/Authentification.types'
import AuthentificationService from '@/services/api/AuthentificationService/Authentification.service'
import { getToken } from '@/services/api/ApiConnection'

class UserStore implements SerializedUserStore {
  rootStore: IRootStore

  userId: string
  username: string
  createdAt: string
  updatedAt: string
  role: Role

  refreshToken: string

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore
    this.userId = ''
    this.username = ''
    this.createdAt = ''
    this.updatedAt = ''
    this.refreshToken = ''
    this.role = getEmptyRole()
    makeAutoObservable(this)
  }

  hydrate(serializedStore: Partial<SerializedUserStore>) {
    this.userId = serializedStore.userId ?? ''
    this.username = serializedStore.username ?? ''
    this.createdAt = serializedStore.createdAt ?? ''
    this.updatedAt = serializedStore.updatedAt ?? ''
    this.role = serializedStore.role ?? getEmptyRole()
    this.refreshToken = serializedStore.refreshToken ?? ''
  }

  static updateTokens(tokenData: Partial<Tokens>) {
    if (tokenData.accessToken) localStorage.setItem('PortalAccessToken', tokenData.accessToken)
    if (tokenData.refreshToken) localStorage.setItem('PortalAccessToken', tokenData.refreshToken)
  }

  async loginHandler(userData: LoginRequest): Promise<void> {
    const data = await AuthentificationService.login(userData)
    UserStore.updateTokens({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    })
  }

  get isAuthorized() {
    return !!this.userId || !!getToken()
  }
}

export default UserStore
