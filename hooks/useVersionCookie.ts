import { getCookie } from '@ui/helpers/getCookie'
import { useEffect, useState } from 'react'

export function useVersionCookie() {
  const [version, setVersion] = useState<string>('')
  useEffect(() => {
    setVersion(getCookie('_version_'))
  }, [])
  return version
}
