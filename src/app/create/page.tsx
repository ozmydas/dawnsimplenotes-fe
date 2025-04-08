import Tiptap from "@/components/Tiptap";
import Tiptaptoolbar from "@/components/Tiptaptoolbar";
import Link from "next/link";

export default function Create() {

    const handleSave = () => {
        alert("🚀 sending post")
    }

    return <div className="container mx-auto bg-[rgba(0,0,0,.7)] p-4 rounded-2xl">
        {/* <h1>Editor Page</h1> */}

        <div>
            <input
                type="text"
                placeholder="You're Title Here"
                className="px-4 py-2 w-full md:w-1/3 rounded-lg focus:outline-none border-none editor-title"
            />

        </div>
        <div className="my-4">
            <Tiptaptoolbar />
            <Tiptap />
        </div>
        <div className="flex gap-4">
            <button className="bg-[green] hover:bg-green-600 text-white font-semibold py-3 px-20 shadow-lg transition-all duration-300 cursor-pointer rounded-2xl text-xl">
                😻 Save & Chill
            </button>

            <Link href="/" className="bg-[tomato] hover:bg-orange-600 text-white font-semibold py-3 px-8 shadow-lg transition-all duration-300 cursor-pointer rounded-2xl text-xl">
                😹 Delete & Back
            </Link>
        </div>
    </div>;
}