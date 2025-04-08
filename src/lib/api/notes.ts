// "use server"

import { MyNote } from "@/types/my_note";
import axios from "axios";
import dayjs from "dayjs";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

export async function save(note: MyNote, token: string) {

    console.log("💡", process.env.APP_KEY)

    let tgl = dayjs(new Date()).format("YYYY-MM-DD").toString()
    let url = process.env.NEXT_PUBLIC_API_URL ?? ""

    console.log("🚀 sending post", process.env.NEXT_PUBLIC_API_URL, note, dayjs(new Date()))

    axios.post(url + "/notes", note, {
        headers: {
            'z-uuid': '0000',
            'z-date': tgl,
            'z-token': token.replace("$argon2id$v=19$m=1024,t=2,p=1", ""),
        }
    })
        .then(function (response) {
            console.log("⚡", response);
            if (response.data.status) {
                Swal.fire('Success!', 'Your note was saved.', 'success');
                setTimeout(() => {
                    redirect("/")
                }, 700);
            } else {
                Swal.fire('Oops!', response.data.message, 'error');
            }
        })
        .catch(function (error) {
            console.log(error);
            Swal.fire('Oops!', 'Something went wrong.', 'error');
        });
}
