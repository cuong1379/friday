import { Dispatch, SetStateAction } from 'react'

export type SyncedProp<S> = [S, Dispatch<SetStateAction<S>>]
export type CustomSyncedProp<S> = [S, (S) => void]
