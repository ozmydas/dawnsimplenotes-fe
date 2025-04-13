"use client"

import { MyNote } from "@/types/my_note";
import axios from "axios";
import dayjs from "dayjs";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";
import default_auth_header from "../fusion";
import { useBearStore } from "@/store/bear";


const bearState = useBearStore.getState();

export async function save(note: MyNote) {

    console.log("💡", process.env.APP_KEY)

    let url = process.env.NEXT_PUBLIC_API_URL ?? ""
    let token = bearState.token;

    console.log("🚀 sending post", process.env.NEXT_PUBLIC_API_URL, note, dayjs(new Date()))

    axios.post(url + "/notes", note, {
        headers: default_auth_header("0000", token)
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
            console.error(error);
            Swal.fire('Oops!', 'Something went wrong - ' + error, 'error')
        });
} // end func


export async function apiNoteGetAll() {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL ?? ''
        const token = bearState.token

        const response = await axios.get(url + '/notes', {
            headers: default_auth_header('0000', token),
        })

        return response.data.data
    } catch (error) {
        console.error(error)
        Swal.fire('Oops!', 'Something went wrong - ' + error, 'error')
        return [] // or throw error if you want to handle it outside
    }
} // end func