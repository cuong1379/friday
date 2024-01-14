import { Dispatch, SetStateAction, useState } from 'react'
import { SyncedProp } from './interface'

export function useSyncedState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>, () => SyncedProp<S>] {
  const [state, setState] = useState(initialState)
  const getSyncedProp = (): SyncedProp<S> => [state, setState]
  return [state, setState, getSyncedProp]
}

export function useNestedSyncedState<S>(
  sp: SyncedProp<S>
): [S, Dispatch<SetStateAction<S>>, () => SyncedProp<S>] {
  const getSyncedProp = (): SyncedProp<S> => sp
  return [...sp, getSyncedProp]
}
