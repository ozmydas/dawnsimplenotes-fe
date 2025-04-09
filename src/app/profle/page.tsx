// 'use client';

import NoteFormCreate from "@/app/create/form_create";
import { save } from "@/lib/api/notes";
import hash_token from "@/lib/hasher";
import { MyNote } from "@/types/my_note";

export default async function Profile() {
    return <div>
        <h1>Profile Page</h1>
    </div>;
} // end func
