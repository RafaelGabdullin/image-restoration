/** Максимальный размер файла */
export const MAX_FILE_SIZE = 512 * 1024 * 1024

export const isServer = () => typeof window === 'undefined'
