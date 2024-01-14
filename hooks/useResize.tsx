import { useEventListener } from './useEventListener'
import { useMemo } from 'react'

function debounce(func: (ev: Event) => any, wait = 100) {
  let timeout: any
  return function (...args: any) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(debounce, args)
    }, wait)
  }
}

export const useResize = (callback: (event: Event) => void, wait = 250): void => {
  const handleResize = useMemo(
    () =>
      wait !== 0
        ? debounce((event: Event) => callback(event), wait)
        : (event: Event) => callback(event),
    [wait, callback]
  )

  useEventListener({
    type: 'resize',
    listener: handleResize,
    options: { passive: true }
  })
}
