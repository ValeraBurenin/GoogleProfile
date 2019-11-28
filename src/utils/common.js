import { cleanLocalStorage, setCookie } from '@/utils'

export const cleanAllData = () => {
  cleanLocalStorage()
  setCookie('token=; path=/; expires=-1')
}
