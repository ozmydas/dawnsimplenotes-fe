"use client"

import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Clipboard, Copy, Italic, List, Scissors, Underline } from "lucide-react";


export default function Tiptaptoolbar({ editor }: { editor: any }) {
    const defaultClass = "text-white p-2 rounded-md flex flex-col items-center justify-center gap-1 shadow-md hover:bg-gray-600 cursor-pointer transition";


    // function Button({ name, Icon, onClick, disabled }: { name: string, Icon: any, onClick: any, disabled: any }) {
    //     return <button title="" className={`${defaultClass}`} onClick={onClick} disabled={disabled}>
    //         <span className="inline-block"><Icon /></span>
    //         <span className="inline-block text-xs">{name}</span>
    //     </button>
    // }

    /// reference : https://tiptap.dev/docs/editor/getting-started/install/react

    const Button = function ({ name, Icon, click, activeRule }: { name: string, Icon: any, click: any, activeRule: any }) {
        return <button title="" className={`${defaultClass} ${activeRule ? 'bg-tomato' : ''}`} onMouseDown={click}>
            <span className="inline-block"><Icon /></span>
            <span className="inline-block text-xs">{name}</span>
        </button>
    }

    return <div className="flex gap-3 my-4 bg-gray-700 p-2 rounded-md">
        <button title="" className={`${defaultClass} ${editor?.isActive('bold') ? 'bg-tomato' : ''}`}
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
                !editor?.can()
                    .chain()
                    .focus()
                    .toggleBold()
                    .run()
            }>
            <span className="inline-block"><Bold /></span>
            <span className="inline-block text-xs">Bold</span>
        </button>

        <Button name="Italic" Icon={Italic}
            activeRule={editor?.isActive('italic')}
            click={() => {
                editor.chain().focus().toggleItalic().run()
            }} />

        <Button name="Underline" Icon={Underline}
            activeRule={editor?.isActive('underline')}
            click={(e: { preventDefault: () => void; }) => {
                e.preventDefault()
                editor.chain().focus().toggleUnderline().run()
            }} />

        <span className="border-l-4 border-l-gray-600"></span>

        <Button name="Align Left" Icon={AlignLeft}
            activeRule={editor?.isActive({ textAlign: 'left' })}
            click={(e: { preventDefault: () => void; }) => {
                e.preventDefault()
                editor.chain().focus().setTextAlign('left').run()
            }} />

        <Button name="Align Center" Icon={AlignCenter}
            activeRule={editor?.isActive({ textAlign: 'center' })}
            click={(e: { preventDefault: () => void; }) => {
                e.preventDefault()
                console.log("asu")
                editor.chain().focus().setTextAlign('center').run()
            }} />

        <Button name="Align Right" Icon={AlignRight}
            activeRule={editor?.isActive({ textAlign: 'right' })}
            click={(e: { preventDefault: () => void; }) => {
                e.preventDefault()
                console.log("asu")
                editor.chain().focus().setTextAlign('right').run()
            }} />

        <Button name="Align Justify" Icon={AlignJustify}
            activeRule={editor?.isActive({ textAlign: 'justify' })}
            click={(e: { preventDefault: () => void; }) => {
                e.preventDefault()
                console.log("asu")
                editor.chain().focus().setTextAlign('justify').run()
            }} />

        <span className="border-l-4 border-l-gray-600"></span>

        <Button name="Bullet List" Icon={List}
            activeRule={editor?.isActive('bulletList')}
            click={(e: { preventDefault: () => void; }) => {
                e.preventDefault()
                editor.chain().focus().toggleBulletList().run()
            }} />

        <span className="border-l-4 border-l-gray-600"></span>





        

        <Button name="Copy" Icon={Copy}
            activeRule={false}
            click={(e: { preventDefault: () => void; }) => {
                e.preventDefault()
                document.execCommand("copy")
            }} />

        <Button name="Cut" Icon={Scissors}
            activeRule={false}
            click={(e: { preventDefault: () => void; }) => {
                e.preventDefault()
                document.execCommand("cut")
            }} />

        <Button name="Paste" Icon={Clipboard}
            activeRule={false}
            click={(e: { preventDefault: () => void; }) => {
                e.preventDefault()
                navigator.clipboard
                    .readText()
                    .then((clipText) => {
                        console.log('teks clipboard:', clipText);
                    });
            }} />
    </div>
}