export type Role = {
  id: string
  name: string
  description: string
}

export const getEmptyRole = (): Role => ({
  id: '',
  name: '',
  description: '',
})
