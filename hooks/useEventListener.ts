import { RefObject, useCallback, useEffect, useRef } from 'react'

export const getElement = <T = undefined>(
  element?: RefObject<Element> | Element | null | T
): Element | null | undefined | T => (element && 'current' in element ? element.current : element)

interface Props {
  type: keyof WindowEventMap | 'visibilitychange'
  listener: EventListener
  element?: RefObject<Element> | Document | Window | HTMLElement | null
  options?: AddEventListenerOptions
}

export const useEventListener = ({
  type,
  listener,
  element = process.browser ? window : undefined,
  options
}: Props) => {
  const savedListener = useRef<EventListener>()

  useEffect(() => {
    savedListener.current = listener
  }, [listener])

  const handleEventListener = useCallback((event: Event) => {
    savedListener.current?.(event)
  }, [])

  useEffect(() => {
    const target = getElement(element)
    target?.addEventListener(type, handleEventListener, options)
    return () => target?.removeEventListener(type, handleEventListener)
  }, [type, element, options, handleEventListener])
}
