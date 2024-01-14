import { useGlobalState } from '@libs/client'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import objectPath from 'object-path'
import { ServerState } from '@ui/helpers'

type SettingType = 'store' | 'sellpage'
type SettingObjectType<T> = T extends 'store' ? S3Types.store_settings : S3Types.page_setting

export const useSetting = <T extends SettingType>(
  type: T
): [
  SettingObjectType<T> | null,
  (
    nextState: S3Types.store | ((currentState: S3Types.store) => void),
    event?: string | undefined
  ) => void
] => {
  const router = useRouter()

  const [store, setStore] = useGlobalState<S3Types.store>('store')

  const setting = useMemo(() => {
    const slug = router.query.subpath?.toString()
    const dataPath =
      type === 'store' ? 'setting.settings' : slug ? `pages.${slug}.setting` : 'pages.setting'
    return objectPath.get(store, dataPath)
  }, [router, type, store])

  return [setting, setStore]
}

export const useReviews = (): [S3Types.page_review[]] => {
  const router = useRouter()
  const [store] = useGlobalState<S3Types.store>('store')

  const reviews = useMemo(() => {
    const slug = router.query.subpath?.toString()
    const reviewPath = slug ? `pages.${slug}.reviews` : 'pages.reviews'

    return objectPath.get(store, reviewPath)
  }, [router, store])

  return [reviews ?? []]
}
export const useRatings = (): [S3Types.review_rating_config] => {
  const router = useRouter()
  const [store] = useGlobalState<S3Types.store>('store')

  const ratings = useMemo(() => {
    const slug = router.query.subpath?.toString()
    const reviewPath = slug ? `pages.${slug}.ratings` : 'pages.ratings'

    return objectPath.get(store, reviewPath)
  }, [router, store])

  return [ratings ?? {}]
}

export const usePromotionsSellpage = () => {
  const router = useRouter()
  const [store] = useGlobalState<S3Types.store>('store')

  const promotions = useMemo(() => {
    const slug = router.query.subpath?.toString()
    const promotionPath = slug ? `pages.${slug}.promotions` : 'pages.promotions'
    return objectPath.get(store, promotionPath)
  }, [router, store])

  return [promotions]
}

export const usePromotions = () => {
  const router = useRouter()
  const [promotions] = useGlobalState<ServerState['promotions']>('promotions')

  const promo = useMemo(() => {
    const slug = router.query.subpath?.toString()
    return { ...promotions?.default, ...promotions?.[slug ?? ''] }
  }, [router, promotions])

  return promo
}

export const usePaygates = () => {
  const [paygates] = useGlobalState<ServerState['paygates']>('paygates')
  return paygates
}

export const usePublisher = () => {
  const [publisher] = useGlobalState<ServerState['publisher']>('publisher')
  return publisher
}

export const useSettingDefault = () => {
  const [settingDefault] = useGlobalState<ServerState['settingDefault']>('settingDefault')
  return settingDefault
}

export const useIsPreview = () => {
  const [isPreiew] = useGlobalState<ServerState['isPreview']>('isPreview')
  return isPreiew ?? false
}

export const useSurveyConfig = (id: string): S3Types.survey_config | undefined => {
  const [surveys] = useGlobalState<ServerState['surveys']>('surveys')
  return surveys?.config?.[id]
}

export const useAnalytics = () => {
  const [analytics] = useGlobalState<ServerState['analytics']>('analytics')
  return (
    analytics ?? {
      pixel_ids: [],
      tiktok_ids: [],
      snapchat_ids: [],
      pinterest_ids: [],
      google_conversion_id: '',
      google_conversion_label: ''
    }
  )
}

export const useIsShowShophelp = () => {
  const [settingDefault] = useGlobalState<ServerState['settingDefault']>('settingDefault')
  if (typeof window !== 'undefined') {
    const shophelp_disabled = (
      settingDefault?.setting?.settings.general?.shophelp_disabled ?? ''
    ).split(',')
    return !shophelp_disabled.includes(window.location.hostname)
  }

  return true
}
