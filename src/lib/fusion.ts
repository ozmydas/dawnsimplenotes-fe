"use client"

import dayjs from "dayjs"

export default function default_auth_header(uid: string, token: string) {
    let tgl = dayjs(new Date()).format("YYYY-MM-DD").toString()
    return {
        'z-uuid': uid,
        'z-date': tgl,
        'z-token': token,
    }
} // end func