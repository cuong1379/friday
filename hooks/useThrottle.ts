import { useEffect, useRef, useState } from 'react'

export function useThrottle<T>(value: T, offset: number) {
  const [throttleValue, setThrottleValue] = useState<T>(value)
  const waiting = useRef(false)
  const lastValue = useRef(value)
  useEffect(() => {
    lastValue.current = value
    if (!waiting.current) {
      waiting.current = true
      setTimeout(() => {
        waiting.current = false
        setThrottleValue(lastValue.current)
      }, offset)
    }
  }, [value, offset])
  return throttleValue
}
