import { CustomerAddress } from '@libs/client/order/services'
import { mappingStateCode, useRefDep } from '@libs/client'
import { countItems, fbpTrackInitAdvanceMatching, fbpTrackSingle, trunc } from '@ui/helpers'
import { useSetting, useSettingDefault } from './useSetting'
import { useEventFbId } from '@libs/client/order/hooks/useLocalCart'
// import getConfig from 'next/config'

export enum PixelEvent {
  ViewContent = 'ViewContent',
  AddToCart = 'AddToCart',
  InitiateCheckout = 'InitiateCheckout',
  AddPaymentInfo = 'AddPaymentInfo',
  Purchase = 'Purchase'
}

const setLoggedEvent = new Set<PixelEvent>()

// const domainsPixel = (getConfig().publicRuntimeConfig.pixelDomain || '').split(',')

export const useFbp = () => {
  const [sellpageSetting] = useSetting('sellpage')
  const [storeSetting] = useSetting('store')
  const [eventFbId] = useEventFbId()
  const contentIdRef = useRefDep(sellpageSetting?.settings?.analytics?.content_id ?? '')
  const pixelIdsRef = useRefDep(sellpageSetting?.settings?.analytics?.pixel_ids ?? [])
  const percentPixel =
    useSettingDefault()?.setting.settings?.general?.percent_pixel?.[
      `${storeSetting?.general?.domain}`
    ] || 1

  const sessionCondition = false
  // typeof window !== 'undefined' &&
  // domainsPixel?.every((domain: string) => !window.location.href?.includes(domain))
  const fbpTrackViewContent = (price = 0) => {
    if (!setLoggedEvent.has(PixelEvent.ViewContent)) {
      fbpTrackSingle(
        PixelEvent.ViewContent,
        {
          content_ids: [contentIdRef.current],
          value: trunc((price || 0) * percentPixel, 2)
        },
        pixelIdsRef.current,
        sessionCondition ? `${eventFbId}` : ''
      )
      setLoggedEvent.add(PixelEvent.ViewContent)
    }
  }

  const fbpTrackAddToCart = (price = 0, quantity = 0) => {
    fbpTrackSingle(
      'AddToCart',
      {
        content_ids: [contentIdRef.current],
        num_items: quantity,
        value: trunc((quantity * price || 0) * percentPixel, 2)
      },
      pixelIdsRef.current,
      sessionCondition ? `${eventFbId}` : ''
    )
  }

  const fbpTrackInitiateCheckout = (items: SfTypes.Item[] = [], items_amount = 0) => {
    fbpTrackSingle(
      'InitiateCheckout',
      {
        content_ids: [contentIdRef.current],
        num_items: countItems(items),
        value: trunc((items_amount || 0) * percentPixel, 2)
      },
      pixelIdsRef.current,
      sessionCondition ? `${eventFbId}` : ''
    )
  }

  const fbpTrackAddPaymentInfo = (items: SfTypes.Item[] = [], items_amount = 0) => {
    fbpTrackSingle(
      'AddPaymentInfo',
      {
        content_ids: [contentIdRef.current],
        num_items: countItems(items),
        value: trunc((items_amount || 0) * percentPixel, 2)
      },
      pixelIdsRef.current,
      sessionCondition ? `${eventFbId}` : ''
    )
  }

  const fbpTrackPurchase = (items: SfTypes.Item[] = [], amount = 0) => {
    fbpTrackSingle(
      'Purchase',
      {
        content_ids: [contentIdRef.current],
        num_items: countItems(items),
        value: trunc((amount || 0) * percentPixel, 2)
      },
      pixelIdsRef.current,
      sessionCondition ? `${eventFbId}` : ''
    )
  }

  const fbpInitAdvanceMatching = (address?: CustomerAddress) => {
    fbpTrackInitAdvanceMatching(
      {
        em: address?.email?.trim()?.toLocaleLowerCase(),
        fn: address?.first_name?.trim()?.toLocaleLowerCase(),
        ln: address?.last_name?.trim()?.toLocaleLowerCase(),
        ph: `1${address?.phone?.replace(/\D/g, '')}`,
        external_id: '',
        ge: '',
        db: '',
        ct: address?.city?.trim()?.toLocaleLowerCase(),
        st: (mappingStateCode as {
          [key: string]: string
        })[(address?.state || '')?.replaceAll(' ', '')?.trim()?.toLocaleLowerCase() || ''],
        zp: address?.postal_code?.trim()?.toLocaleLowerCase(),
        country: address?.country_code?.trim()?.toLocaleLowerCase()
      },
      pixelIdsRef.current
    )
  }

  return {
    fbpTrackViewContent,
    fbpTrackAddToCart,
    fbpTrackInitiateCheckout,
    fbpTrackAddPaymentInfo,
    fbpTrackPurchase,
    fbpInitAdvanceMatching
  }
}
