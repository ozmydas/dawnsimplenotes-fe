import { Copy, FileDown, Pin, QrCode, Share2 } from "lucide-react";

export default function NoteItem() {
    return <div className="w-full bg-gray-950 opacity-80 rounded-2xl shadow-md hover:shadow-[tomato] p-6 border border-gray-600 mb-10">
        <div className="flex justify-between">
            <div className="">📆 1 April 2025, 20:20 AM</div>

            <div className="flex gap-2">
                <button title="pin to top" className="w-8 h-8 bg-gray-700 text-white p-2 rounded-full flex items-center justify-center shadow-md hover:bg-gray-600 cursor-pointer transition">
                    <Pin />
                </button>
                <button title="show QR" className="w-8 h-8 bg-gray-700 text-white p-2 rounded-full flex items-center justify-center shadow-md hover:bg-gray-600 cursor-pointer transition">
                    <QrCode />
                </button>
                <button title="share" className="w-8 h-8 bg-gray-700 text-white p-2 rounded-full flex items-center justify-center shadow-md hover:bg-gray-600 cursor-pointer transition">
                    <Share2 />
                </button>
                <button title="download as pdf" className="w-8 h-8 bg-gray-700 text-white p-2 rounded-full flex items-center justify-center shadow-md hover:bg-gray-600 cursor-pointer transition">
                    <FileDown />
                </button>
                <button title="copy content" className="w-8 h-8 bg-gray-700 text-white p-2 rounded-full flex items-center justify-center shadow-md hover:bg-gray-600 cursor-pointer transition">
                    <Copy />
                </button>
            </div>
        </div>
        <hr className="my-5 border-t border-gray-500 opacity-50" />
        <div className="cursor-pointer">
            <h2 className="text-xl font-bold text-white"><span>📄</span> Demo Title</h2>
            <p className="text-gray-400 mt-4 border-l-3 border-l-[tomato] pl-3 ml-3">
                This is a demo paragraph about demo notes. It serves as a placeholder text to illustrate content structure and formatting. Some features may not work as expected, and certain functionalities might be limited or under development.
            </p>
        </div>
        <div className="mt-8 flex gap-3">
            <span className="bg-gray-500 text-white text-xs font-medium px-3 py-2 rounded-full">
                Lorem Ipsum
            </span>
            <span className="bg-gray-500 text-white text-xs font-medium px-3 py-2 rounded-full">
                Lorem Ipsum
            </span>
            <span className="bg-gray-500 text-white text-xs font-medium px-3 py-2 rounded-full">
                Lorem Ipsum
            </span>
        </div>
    </div>


}