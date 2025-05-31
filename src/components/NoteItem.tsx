"use client"
import { MyNote } from "@/types/my_note";
import dayjs from "dayjs";
import { Copy, FileDown, Pin, QrCode, Share2 } from "lucide-react";

export default function NoteItem({ item, onItemClick  }: { item: MyNote, onItemClick: (item: MyNote) => void }) {

    /// referensi : https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html
    function renderHTMLToHTML(renderedHTML: any) {
        return { __html: renderedHTML };
    }

    /// referensi : https://day.js.org/docs/en/display/format
    function tanggal(tgl: any) {
        return dayjs(tgl).format("D MMMM YYYY, hh:mm A")
    }

    return <div className="w-full bg-gray-950 opacity-80 rounded-2xl shadow-md hover:shadow-[tomato] p-6 border border-gray-600 mb-10">
        <div className="flex justify-between">
            {/* <div className="">📆 1 April 2025, 20:20 AM</div> */}
            <div className="">📆 {tanggal(item.created_at)}</div>

            <div className="flex gap-2">
                {/* <button title="pin to top" className="w-8 h-8 bg-gray-700 text-white p-2 rounded-full flex items-center justify-center shadow-md hover:bg-gray-600 cursor-pointer transition">
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
                </button> */}
                <button title="copy content" className="w-8 h-8 bg-gray-700 text-white p-2 rounded-full flex items-center justify-center shadow-md hover:bg-gray-600 cursor-pointer transition">
                    <Copy />
                </button>
            </div>
        </div>
        <hr className="my-5 border-t border-gray-500 opacity-50" />
        <div className="cursor-pointer" onClick={() => onItemClick(item)}>
            <h2 className="text-xl font-bold text-white"><span>📄</span> {item.title}</h2>
            <div className="text-gray-400 mt-4 border-l-3 border-l-[tomato] pl-3 ml-3">
                {/* {item.content} */}
                <div dangerouslySetInnerHTML={renderHTMLToHTML(item.content)}></div>
            </div>
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
            {(item.tags ?? []).map((tag, index) => (
                <span
                    key={index}
                    className="bg-gray-500 text-white text-xs font-medium px-3 py-2 rounded-full"
                >
                    {tag}
                </span>
            ))}
        </div>
    </div>


}