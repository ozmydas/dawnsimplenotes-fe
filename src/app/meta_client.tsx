'use client';

import { useBearStore } from "@/store/bear";

type props = {
    apptoken: string;
}

export default function MetaClient({ apptoken }: props) {

    const bearState = useBearStore.getState();
    
    bearState.setToken(apptoken)

    console.log("🐻 set token to state :", apptoken)

    return <div>
        <span>META LOADED</span>
    </div>

}