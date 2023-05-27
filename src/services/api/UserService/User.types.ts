import { Role } from '@/services/types'

export interface SignUpRequest {
  username: string
  password: string
}

export interface UploadImagesRequest {
  files: File[]
}

type FileResponseDTO = {
  file_location: string
  file_size: number
  filename: string
}

export interface UploadImagesResponse {
  files_data: FileResponseDTO[]
  user: string
}

export interface UserSchema {
  id: string
  username: string
  role: Role
  created_at: string
  updated_at: string
}
