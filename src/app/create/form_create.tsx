'use client';

import Link from "next/link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Tiptaptoolbar from "../../components/Tiptaptoolbar";
import Tiptap from "../../components/Tiptap";
import { useEffect, useRef, useState } from "react";
import { save } from "@/lib/api/notes";
import SelectFolder from "./SelectFolder";


export default function NoteFormCreate() {

    // const bearState = useBearStore.getState();

    const hasMounted = useRef(false);

    /// referensi : https://www.formbackend.com/nextjs-form
    const [formData, setFormData] = useState({
        title: "Your First Title",
        content: `<h2>Heading</h2>
        <p style="text-align: center">first paragraph</p>
        <p style="text-align: right">second paragraph</p>`,
        path_code: "",
    })

    useEffect(() => {
        if (hasMounted.current) return;
        hasMounted.current = true;

        console.log('app/create Component is mounted')


        // Optional cleanup on unmount
        return () => {
            console.log('app/create Component is unmounted')
        }
    }, [])

    const handleInput = (e: { target: { name: any; value: any; }; }) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const showSwal = () => {
        withReactContent(Swal).fire({
            title: <i>Are You Sure?</i>,
            text: "Note will be saved",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "YES",
            confirmButtonColor: 'green',
            cancelButtonText: "No",
            cancelButtonColor: 'tomato',
        }).then((ok) => {
            if (ok.isConfirmed) {
                // onSendMessage(formData)
                // console.log("💡", token)

                Swal.fire('Loading', 'Please wait a sec...', 'info');
                save(formData)
            }
        })
    }


    return <div>
        <div>
            <input
                type="text"
                placeholder="You're Title Here"
                className="px-4 py-2 w-full rounded-lg focus:outline-none border-none editor-title"
                name="title"
                value={formData.title}
                onChange={handleInput}
            />

        </div>
        <div className="my-4">
            <Tiptap content={formData.content} onEditorChanged={handleInput} />
            <SelectFolder is_multi={true} title="🏷️ Add Tags" selected_value="" onValueChanged={handleInput} />
            <SelectFolder is_multi={false} title="📂 Choose Folder Path" selected_value="" onValueChanged={handleInput} />
        </div>
        <div className="flex gap-4">
            <button onClick={showSwal} className="bg-[green] hover:bg-green-600 text-white font-semibold py-3 px-20 shadow-lg transition-all duration-300 cursor-pointer rounded-2xl text-xl">
                😻 Save & Chill
            </button>

            <Link href="/" className="bg-[tomato] hover:bg-orange-600 text-white font-semibold py-3 px-8 shadow-lg transition-all duration-300 cursor-pointer rounded-2xl text-xl">
                😹 Delete & Back
            </Link>
        </div>
    </div>


}