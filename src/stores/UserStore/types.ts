import { Role } from '@/services/types'
import { StoreStatuses } from '../types'

export interface SerializedUserStore {
  status: StoreStatuses
  userId: string
  username: string
  createdAt: string
  updatedAt: string
  role: Role
  imagesToUpload: File[]
  processedImagesLinks: string[]
}

export type Tokens = {
  accessToken: string
  refreshToken: string
}
