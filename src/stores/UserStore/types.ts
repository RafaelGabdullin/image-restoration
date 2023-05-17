import { Role } from '@/api/types'

export interface SerializedUserStore {
  userId: string
  username: string
  createdAt: string
  updatedAt: string
  role: Role

  token: string
  refreshToken: string
}
