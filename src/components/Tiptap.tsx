'use client'

import { useEditor, EditorContent } from '@tiptap/react'
// import Document from '@tiptap/extension-document'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'
// import { html } from 'motion/react-client'
import Tiptaptoolbar from './Tiptaptoolbar'


/// referensi : https://medium.com/@soojlee0701/how-to-implement-basic-tiptap-editor-for-next-js-2725061b526a

const Tiptap = ({ content, onEditorChanged }: { content: string, onEditorChanged: (e: { target: { name: any; value: any; }; }) => void }) => {
    const editor = useEditor({
        extensions: [StarterKit, Underline, TextAlign.configure({
            types: ['heading', 'paragraph'],
            alignments: ['left', 'center', 'right', 'justify'],
            defaultAlignment: 'left',
        })],
        content,
        // immediatelyRender: false,
        onUpdate({ editor }) {
            // console.log("✒️ tiptap editor :", editor.getHTML())
            onEditorChanged({
                target: {
                    name: "content",
                    value: editor.getHTML(),
                }
            })
        },
    })



    return <>
        <Tiptaptoolbar editor={editor} />
        <EditorContent editor={editor} />
    </>
}

export default Tiptap
