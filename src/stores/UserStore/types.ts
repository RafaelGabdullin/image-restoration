import { Role } from '@/services/types'

export interface SerializedUserStore {
  userId: string
  username: string
  createdAt: string
  updatedAt: string
  role: Role
}

export type Tokens = {
  accessToken: string
  refreshToken: string
}
