import { gtagTrackConversion, gtagTrackEnhanceConversion } from './../helpers/pixel'
import { gaExcludes, useRefDep } from '@libs/client'
import { gtagPageTracking, gtagTrack } from '@ui/helpers'
import { useCallback } from 'react'
import { useSetting, useSettingDefault } from './useSetting'

export const propertiesText = (properties?: S3Types.item_properties) =>
  Object.values(properties ?? {}).join(' / ')

const productLabel = (sellpageSetting: S3Types.page_setting | null) =>
  sellpageSetting?.settings?.general?.title?.split('-')?.[0]?.trim() ?? ''

export const useGtag = () => {
  const [storeSetting] = useSetting('store')
  const settingDefault = useSettingDefault()
  const [sellpageSetting] = useSetting('sellpage')
  const sellpageSettingRef = useRefDep(sellpageSetting)
  const gaIdsAdmin = !gaExcludes.includes(storeSetting?.general?.domain || '')
    ? (settingDefault?.setting?.settings.general?.ga_ids ?? '').split(',')
    : []
  const eventInfo = (items: Types.OrderItem[] = [], amount = 0): Types.GtagEventData => {
    return {
      items: items.map((item) => {
        return {
          item_id: sellpageSettingRef.current?.settings.general.pbase_id || '',
          item_name: sellpageSettingRef.current?.settings.general.title ?? '',
          item_brand: productLabel(sellpageSettingRef.current),
          item_variant: propertiesText(item.properties),
          price: item.price ?? 0,
          quantity: item.quantity,
          currency: 'USD'
        }
      }),
      value: amount,
      currency: 'USD'
    }
  }

  const gtagTrackPageView = useCallback(
    (pagePath: string) => {
      gtagPageTracking(
        [...(storeSetting?.analytics?.google_analytic_ids ?? []), ...(gaIdsAdmin ?? [])],
        pagePath
      )
    },
    [sellpageSettingRef]
  )

  const gtagTrackViewItem = useCallback(
    (price = 0) => {
      gtagTrack('view_item', {
        items: [
          {
            item_id: sellpageSettingRef.current?.settings.general.pbase_id || '',
            item_name: sellpageSettingRef.current?.settings.general.title ?? '',
            item_brand: productLabel(sellpageSettingRef.current),
            price,
            currency: 'USD'
          }
        ]
      })
    },
    [sellpageSettingRef]
  )

  const gtagTrackAddToCart = useCallback(
    (selectedVariant?: Types.OrderItem | null, quantity = 0) => {
      gtagTrack('add_to_cart', {
        items: [
          {
            item_id: sellpageSettingRef.current?.settings.general.pbase_id || '',
            item_name: sellpageSettingRef.current?.settings.general.title ?? '',
            item_brand: productLabel(sellpageSettingRef.current),
            item_variant: propertiesText(selectedVariant?.properties),
            price: selectedVariant?.price ?? 0,
            quantity,
            currency: 'USD'
          }
        ],
        value: (selectedVariant?.price ?? 0) * quantity
      })
    },
    [sellpageSettingRef]
  )

  const gtagTrackRemoveFromCart = useCallback(
    (removedVariant?: Types.OrderItem | null, quantity = 0) => {
      gtagTrack('remove_from_cart', {
        items: [
          {
            item_id: sellpageSettingRef.current?.settings.general.pbase_id || '',
            item_name: sellpageSettingRef.current?.settings.general.title ?? '',
            item_brand: productLabel(sellpageSettingRef.current),
            item_variant: propertiesText(removedVariant?.properties),
            price: removedVariant?.price ?? 0,
            quantity,
            currency: 'USD'
          }
        ],
        value: (removedVariant?.price ?? 0) * quantity
      })
    },
    [sellpageSettingRef]
  )

  const gtagTrackViewCart = useCallback(
    (items: Types.OrderItem[] = [], items_amount = 0) => {
      gtagTrack('view_cart', eventInfo(items, items_amount))
    },
    [sellpageSettingRef]
  )

  const gtagTrackBeginCheckout = useCallback(
    (items: Types.OrderItem[] = [], items_amount = 0) => {
      gtagTrack('begin_checkout', eventInfo(items, items_amount))
    },
    [sellpageSettingRef]
  )

  const gtagTrackAddShippingInfo = useCallback(
    (items: Types.OrderItem[] = [], items_amount = 0) => {
      gtagTrack('add_shipping_info', {
        ...eventInfo(items, items_amount),
        shipping_tier: 'Air'
      })
    },
    [sellpageSettingRef]
  )

  const gtagTrackAddPaymentInfo = useCallback(
    (
      items: Types.OrderItem[] = [],
      items_amount = 0,
      paymentType: 'Braintree' | 'Credit Card' | 'Paypal' | 'Stripe' = 'Credit Card'
    ) => {
      gtagTrack('add_payment_info', {
        ...eventInfo(items, items_amount),
        payment_type: paymentType
      })
    },
    [sellpageSettingRef]
  )

  const gtagTrackPurchase = useCallback(
    (order?: Types.Order) => {
      gtagTrack('purchase', {
        ...eventInfo(order?.items, (order?.items_amount ?? 0) - (order?.discount_amount ?? 0)),
        tax: order?.tax_amount ?? 0,
        shipping: order?.shipping_amount ?? 0,
        transaction_id: order?.id
      })
    },
    [sellpageSettingRef]
  )
  const gtagTrackConversionPurchase = useCallback(
    (id: string, order?: Types.Order) => {
      gtagTrackConversion('conversion', id, order?.amount || 0, order?.id)
    },
    [sellpageSettingRef]
  )
  const gtagEnhanceConversion = useCallback(
    (order?: Types.Order) => {
      gtagTrackEnhanceConversion('user_data', {
        ...(order?.shipping?.email
          ? { email: order?.shipping?.email?.trim()?.toLocaleLowerCase() }
          : {}),
        ...(order?.shipping?.phone
          ? { phone_number: `+1${order?.shipping?.phone?.replace(/\D/g, '')}` }
          : {}),
        address: {
          ...(order?.shipping?.first_name
            ? { first_name: order?.shipping?.first_name?.trim()?.toLocaleLowerCase() }
            : {}),
          ...(order?.shipping?.last_name
            ? { last_name: order?.shipping?.last_name?.trim()?.toLocaleLowerCase() }
            : {}),
          ...(order?.shipping?.address1
            ? { street: order?.shipping?.address1?.trim()?.toLocaleLowerCase() }
            : {}),
          ...(order?.shipping?.city
            ? { city: order?.shipping?.city?.trim()?.toLocaleLowerCase() }
            : {}),
          ...(order?.shipping?.state
            ? { region: order?.shipping?.state?.trim()?.toLocaleLowerCase() }
            : {}),
          ...(order?.shipping?.postal_code
            ? { postal_code: order?.shipping?.postal_code?.trim()?.toLocaleLowerCase() }
            : {}),
          ...(order?.shipping?.country_code
            ? { country: order?.shipping?.country_code?.trim()?.toLocaleLowerCase() }
            : {})
        }
      })
    },
    [sellpageSettingRef]
  )

  return {
    gtagTrackPageView,
    gtagTrackViewItem,
    gtagTrackAddToCart,
    gtagTrackRemoveFromCart,
    gtagTrackViewCart,
    gtagTrackBeginCheckout,
    gtagTrackAddShippingInfo,
    gtagTrackAddPaymentInfo,
    gtagTrackPurchase,
    gtagTrackConversionPurchase,
    gtagEnhanceConversion
  }
}
