'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { html } from 'motion/react-client'


/// referensi : https://medium.com/@soojlee0701/how-to-implement-basic-tiptap-editor-for-next-js-2725061b526a

const Tiptap = ({ content, onEditorChanged }: { content: string, onEditorChanged: (e: { target: { name: any; value: any; }; }) => void }) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content,
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

    return <EditorContent editor={editor} />
}

export default Tiptap
