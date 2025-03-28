import FolderTree from "./FolderTree";

export default function SideBar() {
    return <div className="bg-gray-950 opacity-80 text-white min-h-1/4 rounded-2xl p-4" >

        <div className="subtitle my-4">✨ Project Explorer</div>

        <FolderTree />
    </div>
}