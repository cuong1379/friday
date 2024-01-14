import { useRefDep } from '@libs/client'
import { countItems, ttqTrackSingle, ttqTrackSingleIdentify } from '@ui/helpers'
import { useSetting } from './useSetting'
import { CustomerAddress } from '@libs/client/order/services'

export const useTtq = () => {
  const [sellpageSetting] = useSetting('sellpage')
  const contentIdRef = useRefDep(sellpageSetting?.settings?.analytics?.content_id ?? '')
  const sellpageTitleRef = useRefDep(sellpageSetting?.settings?.general.title ?? '')
  const pixelIdsRef = useRefDep(sellpageSetting?.settings?.analytics?.tiktok_ids ?? [])

  const eventInfo = (
    items: Types.OrderItem[] = [],
    amount = 0,
    isContentType = true
  ): Types.TiktokPixelEventData => {
    return {
      contents: items.map((item) => {
        return {
          content_id: contentIdRef.current,
          ...(isContentType ? { content_type: 'product' } : {}),
          content_name: sellpageTitleRef.current,
          content_category: 'Default',
          price: item.price
        }
      }),
      value: amount,
      quantity: countItems(items),
      currency: 'USD'
    }
  }

  const ttqTrackViewContent = (price = 0) => {
    ttqTrackSingle(
      'ViewContent',
      {
        content_id: contentIdRef.current,
        content_type: 'product',
        content_name: sellpageTitleRef.current,
        content_category: 'Default',
        currency: 'USD',
        value: price || 0,
        price: price || 0
      },
      pixelIdsRef.current
    )
  }

  const ttqTrackAddToCart = (price = 0, quantity = 0) => {
    ttqTrackSingle(
      'AddToCart',
      {
        content_id: contentIdRef.current,
        content_type: 'product',
        content_name: sellpageTitleRef.current,
        content_category: 'Default',
        currency: 'USD',
        price: quantity * price,
        value: quantity * price,
        quantity
      },
      pixelIdsRef.current
    )
  }

  const ttqTrackInitiateCheckout = (items: Types.OrderItem[] = [], items_amount = 0) => {
    ttqTrackSingle('StartCheckout', eventInfo(items, items_amount, false), pixelIdsRef.current)
  }

  const ttqTrackCheckout = (items: Types.OrderItem[] = [], items_amount = 0) => {
    ttqTrackSingle('Checkout', eventInfo(items, items_amount), pixelIdsRef.current)
  }

  const ttqTrackAddBilling = (items: Types.OrderItem[] = [], items_amount = 0) => {
    ttqTrackSingle('AddBilling', eventInfo(items, items_amount, false), pixelIdsRef.current)
  }

  const ttqTrackPurchase = (items: Types.OrderItem[] = [], amount = 0) => {
    ttqTrackSingle('Purchase', eventInfo(items, amount), pixelIdsRef.current)
  }

  const ttqTrackIdentify = (address?: CustomerAddress) => {
    ttqTrackSingleIdentify({ email: address?.email, phone: address?.phone })
  }

  return {
    ttqTrackViewContent,
    ttqTrackAddToCart,
    ttqTrackInitiateCheckout,
    ttqTrackCheckout,
    ttqTrackAddBilling,
    ttqTrackPurchase,
    ttqTrackIdentify
  }
}
