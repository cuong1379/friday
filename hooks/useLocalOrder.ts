import { useLocalBuyNowOrder, useLocalIsBuyNow, useLocalOrder } from '@libs/client'

export const useCurrentOrder = () => {
  const [order, setOrder] = useLocalOrder<Types.Order>()
  const [buynowOrder, setBuyNowOrder] = useLocalBuyNowOrder<Types.Order>()
  const [isBuyNow] = useLocalIsBuyNow()

  return isBuyNow ? ([buynowOrder, setBuyNowOrder] as const) : ([order, setOrder] as const)
}
