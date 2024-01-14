import { getCookie, setCookie } from '@ui/helpers/getCookie'
import { useState } from 'react'

export function useCookieState<T>(key: string, initialValue: T | string) {
  const getInitialValue = () => {
    // if we on the server just use an initial value
    if (typeof window === 'undefined') return initialValue

    return getCookie(key)
  }

  // get initial state value on component mounts
  const [value, setValue] = useState(getInitialValue)

  // encode and save the new cookie value
  const setNextValue = (value: string) => {
    setCookie(key, value, 0)
    setValue(value)
  }

  return [value, setNextValue]
}
