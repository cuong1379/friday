import { gaSend, gaSet, getUtmQueries } from '@ui/helpers'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useGa = () => {
  const router = useRouter()

  useEffect(() => {
    const utmQueries = getUtmQueries(router.query)

    if (router.pathname.indexOf('/checkout') === 0) {
      gaSet('page', `/checkout?${utmQueries}`)
    } else if (router.pathname.indexOf('/thankyou') === 0) {
      gaSet('page', `/thankyou?${utmQueries}`)
    } else if (router.pathname.indexOf('/order') === 0) {
      gaSet('page', `/order?${utmQueries}`)
    } else {
      gaSet('page', `${router.pathname}?${utmQueries}`)
    }

    gaSend('pageview')
  }, [router])
}
