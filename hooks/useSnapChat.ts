import { useRefDep } from '@libs/client'
import { countItems, snapchatTrack } from '@ui/helpers'
import { useSetting } from './useSetting'

export enum SnapchatEvent {
  ViewContent = 'VIEW_CONTENT',
  AddToCart = 'ADD_CART',
  InitiateCheckout = 'START_CHECKOUT',
  AddPaymentInfo = 'ADD_BILLING',
  Purchase = 'PURCHASE'
}

const setLoggedEvent = new Set<SnapchatEvent>()

export const useSnapChat = () => {
  const [sellpageSetting] = useSetting('sellpage')
  const sellpageTitleRef = useRefDep(sellpageSetting?.settings?.general.title ?? '')
  const contentIdRef = useRefDep(sellpageSetting?.settings?.analytics?.content_id ?? '')

  const snapchatTrackViewContent = (price = 0) => {
    if (!setLoggedEvent.has(SnapchatEvent.ViewContent)) {
      snapchatTrack(SnapchatEvent.ViewContent, {
        item_category: sellpageTitleRef.current,
        item_ids: [contentIdRef.current],
        price: price || 0
      })
      setLoggedEvent.add(SnapchatEvent.ViewContent)
    }
  }

  const snapchatTrackAddToCart = (price = 0, quantity = 0) => {
    snapchatTrack(SnapchatEvent.AddToCart, {
      item_category: sellpageTitleRef.current,
      item_ids: [contentIdRef.current],
      number_items: quantity,
      price: quantity * price
    })
  }

  const snapchatTrackInitiateCheckout = (items: SfTypes.Item[] = [], items_amount = 0) => {
    snapchatTrack(SnapchatEvent.InitiateCheckout, {
      item_category: sellpageTitleRef.current,
      item_ids: [contentIdRef.current],
      number_items: countItems(items),
      price: items_amount
    })
  }

  const snapchatTrackAddPaymentInfo = (items: SfTypes.Item[] = [], items_amount = 0) => {
    snapchatTrack(SnapchatEvent.AddPaymentInfo, {
      item_category: sellpageTitleRef.current,
      item_ids: [contentIdRef.current],
      number_items: countItems(items),
      price: items_amount
    })
  }

  const snapchatTrackPurchase = (items: SfTypes.Item[] = [], amount = 0) => {
    snapchatTrack(SnapchatEvent.Purchase, {
      item_category: sellpageTitleRef.current,
      item_ids: [contentIdRef.current],
      number_items: countItems(items),
      price: amount
    })
  }

  return {
    snapchatTrackViewContent,
    snapchatTrackAddToCart,
    snapchatTrackInitiateCheckout,
    snapchatTrackAddPaymentInfo,
    snapchatTrackPurchase
  }
}
