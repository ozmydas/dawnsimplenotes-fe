'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/// referensi : https://zustand.docs.pmnd.rs/integrations/persisting-store-data#typescript-simple-example 

type BearStore = {
    bears: number
    addABear: () => void
    uuid: string
    token: string
    setToken: (token:string) => void
}

export const useBearStore = create<BearStore>()(
    persist(
        (set, get) => ({
            uuid: "0000",
            bears: 0,
            addABear: () => set({ bears: get().bears + 1 }),
            token: "xxxx",
            setToken: (value) => set({token: value})
        }),
        {
            name: 'auth-storage', // name of the item in the storage (must be unique)
        },
    ),
)