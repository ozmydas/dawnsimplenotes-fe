"use client"

import Modal from "@/components/Modal";
import NoteItem from "@/components/NoteItem";
import QuickAdd from "@/components/QuickAdd";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import TagsBar from "@/components/TagsBar";
import { apiNoteGetAll, apiNoteGetSingle } from "@/lib/api/notes";
import { MyNote } from "@/types/my_note";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function AppContent() {

    const [noteLists, setNoteLists] = useState<MyNote[]>([])
    const [noteSelected, setNoteSelected] = useState<MyNote | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log('app Component is mounted')

        loadData();

        // Optional cleanup on unmount
        return () => {
            console.log('app Component is unmounted')
        }
    }, [])


    async function loadData() {
        const data = await apiNoteGetAll()
        // console.log("🐈", data)
        setNoteLists((prev) => data)
    }

    const handleOpenModalFromParent = async (item: MyNote) => {
        setIsLoading(true);

        const data = await apiNoteGetSingle(item.code) 

        setNoteSelected(data);
        setIsModalOpen(true);
        setIsLoading(false);
    };


    return <div>
        <SearchBar />

        <TagsBar />

        <div className="container mx-auto flex flex-col md:flex-row my-10">
            {/* Sidebar */}
            {/* <aside className="w-full lg:w-1/3 xl:w-1/4 p-4 md:sticky top-0 md:h-screen">
                <SideBar />
            </aside> */}

            {/* Main Content */}
            <main className="w-full lg:w-3/3 xl:w-4/4 p-4">

                <QuickAdd />

                {/* looping item */}
                {noteLists.map((note, index) => (
                    <NoteItem item={note} key={index} onItemClick={handleOpenModalFromParent} />
                ))}
                {/* end looping item */}

                {/* modal */}
                <Modal isOpen={isModalOpen} onClose={function (): void {
                    setIsModalOpen(false);
                }}>
                    <h2 className="text-2xl text-center font-bold text-white">{noteSelected?.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(noteSelected?.content ?? "") }} />
                </Modal>
                {/* end modal */}

            </main>
        </div>
    </div>
}