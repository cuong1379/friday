import { isAndroidIos } from '@ui/helpers'
import { useEffect, useState } from 'react'

export function useAgents() {
  const [isMobile, setIsMobile] = useState<boolean>(true)
  useEffect(() => {
    setIsMobile(isAndroidIos())
  }, [])
  return isMobile
}
