import { Role, getEmptyRole } from '@/api/types'
import { makeAutoObservable } from 'mobx'
import { SerializedUserStore } from './types'

class UserStore implements SerializedUserStore {
  userId: string
  username: string
  createdAt: string
  updatedAt: string
  role: Role

  token: string
  refreshToken: string

  constructor() {
    makeAutoObservable(this)
    this.userId = ''
    this.username = ''
    this.createdAt = ''
    this.updatedAt = ''
    this.token = ''
    this.refreshToken = ''
    this.role = getEmptyRole()
  }

  hydrate(serializedStore: SerializedUserStore) {
    this.userId = serializedStore.userId
    this.username = serializedStore.username
    this.createdAt = serializedStore.createdAt
    this.updatedAt = serializedStore.updatedAt
    this.role = serializedStore.role
    this.token = serializedStore.token
    this.refreshToken = serializedStore.refreshToken
  }

  get isAuthorized() {
    return !!this.userId
  }
}

export default UserStore
