"use client"

import NoteItem from "@/components/NoteItem";
import QuickAdd from "@/components/QuickAdd";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import TagsBar from "@/components/TagsBar";
import { apiNoteGetAll } from "@/lib/api/notes";
import { MyNote } from "@/types/my_note";
import { useEffect, useState } from "react";

export default function AppContent() {

    const [noteLists, setNoteLists] = useState<MyNote[]>([])

    useEffect(() => {
        console.log('Component is mounted')

        loadData();

        // Optional cleanup on unmount
        return () => {
            console.log('Component is unmounted')
        }
    }, [])


    async function loadData() {
        const data = await apiNoteGetAll()

        console.log("🐈", data)

        setNoteLists((prev) => data)
    }


    return <div>
        <SearchBar />

        <TagsBar />

        <div className="container mx-auto flex flex-col md:flex-row my-10">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/3 xl:w-1/4 p-4 md:sticky top-0 md:h-screen">
                <SideBar />
            </aside>

            {/* Main Content */}
            <main className="w-full lg:w-2/3 xl:w-3/4 p-4">

                <QuickAdd />

                {/* looping item */}
                {noteLists.map((note, index) => (
                    <NoteItem item={note} />
                ))}
                {/* end looping item */}


            </main>
        </div>
    </div>
}