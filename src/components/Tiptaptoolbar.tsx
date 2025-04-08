import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Clipboard, Copy, Italic, Scissors, Underline } from "lucide-react";

export default function Tiptaptoolbar() {
    return <div className="flex gap-3 my-4 bg-gray-700 p-2 rounded-md">
        <span title="" className="bg-gray-500 text-white p-2 rounded-md flex flex-col items-center justify-center gap-1 shadow-md hover:bg-gray-600 cursor-pointer transition">
            <span className="inline-block"><Bold /></span>
            <span className="inline-block text-xs">Bold</span>
        </span>
        <span title="" className="bg-gray-500 text-white p-2 rounded-md flex flex-col items-center justify-center gap-1 shadow-md hover:bg-gray-600 cursor-pointer transition">
            <span className="inline-block"><Italic /></span>
            <span className="inline-block text-xs">Italic</span>
        </span>
        <span title="" className="bg-gray-500 text-white p-2 rounded-md flex flex-col items-center justify-center gap-1 shadow-md hover:bg-gray-600 cursor-pointer transition">
            <span className="inline-block"><Underline /></span>
            <span className="inline-block text-xs">Underline</span>
        </span>
        <span className="border-l-4 border-l-gray-600"></span>
        <span title="" className="bg-gray-500 text-white p-2 rounded-md flex flex-col items-center justify-center gap-1 shadow-md hover:bg-gray-600 cursor-pointer transition">
            <span className="inline-block"><AlignLeft /></span>
            <span className="inline-block text-xs">Align Left</span>
        </span>
        <span title="" className="bg-gray-500 text-white p-2 rounded-md flex flex-col items-center justify-center gap-1 shadow-md hover:bg-gray-600 cursor-pointer transition">
            <span className="inline-block"><AlignCenter /></span>
            <span className="inline-block text-xs">Align Center</span>
        </span>
        <span title="" className="bg-gray-500 text-white p-2 rounded-md flex flex-col items-center justify-center gap-1 shadow-md hover:bg-gray-600 cursor-pointer transition">
            <span className="inline-block"><AlignRight /></span>
            <span className="inline-block text-xs">Align Right</span>
        </span>
        <span title="" className="bg-gray-500 text-white p-2 rounded-md flex flex-col items-center justify-center gap-1 shadow-md hover:bg-gray-600 cursor-pointer transition">
            <span className="inline-block"><AlignJustify /></span>
            <span className="inline-block text-xs">Align Justify</span>
        </span>
        <span className="border-l-4 border-l-gray-600"></span>
        <span title="" className="bg-gray-500 text-white p-2 rounded-md flex flex-col items-center justify-center gap-1 shadow-md hover:bg-gray-600 cursor-pointer transition">
            <span className="inline-block"><Copy /></span>
            <span className="inline-block text-xs">Copy</span>
        </span>
        <span title="" className="bg-gray-500 text-white p-2 rounded-md flex flex-col items-center justify-center gap-1 shadow-md hover:bg-gray-600 cursor-pointer transition">
            <span className="inline-block"><Scissors /></span>
            <span className="inline-block text-xs">Cut</span>
        </span>
        <span title="" className="bg-gray-500 text-white p-2 rounded-md flex flex-col items-center justify-center gap-1 shadow-md hover:bg-gray-600 cursor-pointer transition">
            <span className="inline-block"><Clipboard /></span>
            <span className="inline-block text-xs">Paste</span>
        </span>
    </div>
}