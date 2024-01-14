import { useGlobalState } from '@libs/client'
import { useEffect, useState } from 'react'

export const IS_SERVER_MOUNTED = 'is_server_mounted'

export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

export function useServerMounted() {
  const [mounted] = useGlobalState<boolean>(IS_SERVER_MOUNTED)
  return mounted
}
