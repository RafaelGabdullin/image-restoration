import { Role } from '@/services/types'

export interface SignUpRequest {
  username: string
  password: string
}

export interface UserSchema {
  id: string
  username: string
  role: Role
  created_at: string
  updated_at: string
}
