import type { Nullable } from '@/types/primary'

export const lsGet = <T extends string = string>(
  key: string,
  // eslint-disable-next-line
  fallback: any = null,
): T => {
  const item = localStorage.getItem(key)

  if (!item) {
    return fallback
  }

  return item as T
}

export const lsSave = (
  key: string,
  // eslint-disable-next-line
  payload?: Nullable<Record<string, any> | string | any[]>,
) => {
  if (!payload) {
    // eslint-disable-next-line
    console.log('LocalStorage helper: ommiting to set an empty value')
    return
  }

  const valueType = typeof payload

  const stringifyTypes = ['object', 'array']

  if (stringifyTypes.includes(valueType)) {
    localStorage.setItem(key, JSON.stringify(payload))
    return
  }

  localStorage.setItem(key, `${payload}`)
}

export const lsRemove = (key: string) => localStorage.removeItem(key)

export const lsHas = (key: string) => lsGet(key) !== null
