import { useRefDep } from '@libs/client'
import { pinterestPixelTrackSingle } from '@ui/helpers'
import { useSetting } from './useSetting'

export enum PinterestEvent {
  ViewContent = 'PageVisit',
  AddToCart = 'AddToCart',
  Purchase = 'Checkout'
}

const setLoggedEvent = new Set<PinterestEvent>()

export const usePinterest = () => {
  const [sellpageSetting] = useSetting('sellpage')
  const sellpageTitleRef = useRefDep(sellpageSetting?.settings?.general.title ?? '')
  const contentIdRef = useRefDep(sellpageSetting?.settings?.analytics?.content_id ?? '')
  const pixelIdsRef = useRefDep(sellpageSetting?.settings?.analytics?.pinterest_ids ?? [])

  const pinterestTrackViewContent = (price = 0) => {
    if (!setLoggedEvent.has(PinterestEvent.ViewContent)) {
      pinterestPixelTrackSingle(
        PinterestEvent.ViewContent,
        {
          value: price || 0,
          currency: 'USD',
          line_items: [
            {
              product_category: '',
              product_name: sellpageTitleRef.current,
              product_id: [contentIdRef.current || ''],
              product_price: price || 0,
              product_quantity: 1
            }
          ]
        },
        pixelIdsRef.current
      )
      setLoggedEvent.add(PinterestEvent.ViewContent)
    }
  }

  const pinterestTrackAddToCart = (price = 0, quantity = 0) => {
    pinterestPixelTrackSingle(
      PinterestEvent.AddToCart,
      {
        value: quantity * price,
        currency: 'USD',
        line_items: [
          {
            product_category: '',
            product_name: sellpageTitleRef.current,
            product_id: [contentIdRef.current || ''],
            product_price: quantity * price,
            product_quantity: quantity
          }
        ]
      },
      pixelIdsRef.current
    )
  }
  const pinterestTrackPurchase = (amount = 0) => {
    pinterestPixelTrackSingle(
      PinterestEvent.Purchase,
      {
        value: amount,
        order_quantity: 1,
        currency: 'USD',
        line_items: [
          {
            product_category: '',
            product_name: sellpageTitleRef.current,
            product_id: [contentIdRef.current || ''],
            product_price: amount,
            product_quantity: 1
          }
        ]
      },
      pixelIdsRef.current
    )
  }

  return {
    pinterestTrackViewContent,
    pinterestTrackAddToCart,
    pinterestTrackPurchase
  }
}
