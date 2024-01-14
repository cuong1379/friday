import { useEffect, useRef } from 'react'
import deepEqual from 'fast-deep-equal/react'

export function useDeepEffect(
  callback: (currentDeps: [any], previousDeps: [any]) => void,
  deps: [any]
) {
  const isFirst = useRef(true)
  const prevDeps = useRef(deps)

  useEffect(() => {
    const isSame = prevDeps.current.every((dep, index) => deepEqual(dep, deps[index]))

    if (isFirst.current || !isSame) {
      callback(deps, prevDeps.current)
    }

    isFirst.current = false
    prevDeps.current = JSON.parse(JSON.stringify(deps))
  }, deps)
}
