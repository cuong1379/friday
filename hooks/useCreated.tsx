import { useRef } from 'react'

/**
 * This hook will be called only once when component init
 * @param callback Action executed when component init
 */
export const useCreated = (callback?: () => void) => {
  const isInit = useRef(false)

  if (!isInit.current) {
    isInit.current = true
    if (process.browser) callback?.()
  }
}
