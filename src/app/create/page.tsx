// 'use client';

import NoteFormCreate from "@/app/create/form_create";
import { save } from "@/lib/api/notes";
import hash_token from "@/lib/hasher";
import { MyNote } from "@/types/my_note";

export default async function Create() {

    const getToken = await hash_token() ?? "";


    return <div className="container mx-auto bg-[rgba(0,0,0,.7)] p-4 rounded-2xl">
        {/* <h1>Editor Page</h1> */}

        <NoteFormCreate token={getToken} />
    </div>;
} // end func
