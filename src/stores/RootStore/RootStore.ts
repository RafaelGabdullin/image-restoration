import { AllValuesPartial } from '@/types/utilTypes'
import UserStore from '../UserStore/UserStore'

export interface IRootStore {
  hydrate: (data: InitialState) => void
  userStore: UserStore
}

type RootStoreNoHydr = Omit<IRootStore, 'hydrate'>

export type InitialState = AllValuesPartial<RootStoreNoHydr>

export class RootStore {
  userStore: UserStore

  constructor() {
    this.userStore = new UserStore(this)
  }

  hydrate(data: InitialState) {
    if (!data) return
    this.userStore.hydrate(data.userStore)
  }
}

const rootStore: IRootStore = new RootStore()
export default rootStore
