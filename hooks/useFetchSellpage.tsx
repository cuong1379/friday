import { useRouter } from 'next/router'
import * as immutable from 'object-path-immutable'
import { useEffect, useState } from 'react'
import { store_type } from '@libs/common/models/constant'
import { useNotiContext } from '@ui/components/shared/Notification'
import { getPageBySlug, getPreviewService } from '@ui/services'
import { useIsPreview } from './useSetting'
import { useVersionCookie } from './useVersionCookie'
import { removeUnavailableProperties } from '@libs/server'

export interface IFetchSellPage {
  storeSetting: S3Types.store_settings | null
  sellpageSetting: S3Types.page_setting | null
  setStore: (
    nextState: S3Types.store | ((currentState: S3Types.store) => void),
    event?: string | undefined
  ) => void
}

export function useFetchSellPage({ storeSetting, sellpageSetting, setStore }: IFetchSellPage) {
  const router = useRouter()
  const subpath = router.query.subpath?.toString()
  const isMultiStore = storeSetting?.general?.type === store_type.MINISTORE
  const { notiDispatch } = useNotiContext()
  const versionCookie = useVersionCookie()
  const isPreview = useIsPreview()
  const { preview } = getPreviewService()

  const [loading, setLoading] = useState(
    isPreview || (isMultiStore && subpath && !sellpageSetting?.settings)
  )

  useEffect(() => {
    if (isPreview) {
      const previewId = router.query?.page?.toString()
      if (previewId && !sellpageSetting?.settings) {
        ;(async function () {
          try {
            setLoading(true)
            const _page = await preview(previewId)
            if (_page?.setting) {
              setStore((store: S3Types.store) => {
                removeUnavailableProperties(_page.setting?.variants)
                const _store = immutable.set(store, `pages.setting`, _page.setting)
                if (_store?.pages) {
                  _store.pages.reviews = _page?.reviews
                  _store.pages.ratings = _page?.ratings
                }
                return _store
              })
            }
          } catch (error) {
            notiDispatch({
              payload: { content: 'Can not get sell page', type: 'is-danger' },
              type: 'REMOVE_ALL_AND_ADD'
            })
          } finally {
            setLoading(false)
          }
        })()
      } else {
        setLoading(false)
      }
    } else {
      if (isMultiStore && subpath && !sellpageSetting?.settings) {
        ;(async function () {
          try {
            setLoading(true)
            const _page = await getPageBySlug(storeSetting?.general.id ?? '', subpath)
            if (_page?.setting) {
              if (_page?.setting.settings.configurations.hide_clearance) {
                _page.setting.settings.general.upsell = false
              }

              // if (
              //   sellpageSetting?.settings?.general?.upsell ||
              //   sellpageSetting?.settings?.configurations.hide_clearance
              // ) {
              //   removeUnavailablePropertiesUpsell(_page?.setting?.variants)
              //   removeBunderVariant(_page?.setting)
              // }
              if (versionCookie === 'v14') {
                _page.setting.settings.social_proof.countdown_time = 21600
              }
              setStore((store: S3Types.store) => {
                const _store = immutable.set(store, `pages.${subpath}.setting`, _page.setting)
                if (_store?.pages?.[subpath]) {
                  _store.pages[subpath].reviews = _page.reviews
                }
                return _store
              })
            }
          } catch (error) {
            notiDispatch({
              payload: { content: 'Can not get sell page', type: 'is-danger' },
              type: 'REMOVE_ALL_AND_ADD'
            })
          } finally {
            setLoading(false)
          }
        })()
      } else {
        setLoading(false)
      }
    }
  }, [router, versionCookie])

  return [loading]
}
