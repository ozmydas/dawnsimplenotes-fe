'use client'

import { useState } from "react";

export default function FolderTree() {
  const [openFolder1, setOpenFolder1] = useState(false);
  const [openFolder2, setOpenFolder2] = useState(false);

  return (
    <div className="p-4  w-full max-w-sm rounded-lg shadow-lg">
      {/* Root Folder */}
      <div className="font-bold ">🔥 My Personal Notes</div>

      {/* Subfolder 1 */}
      <div className="ml-4 mt-2">
        <button
          className="flex items-center focus:outline-none"
          onClick={() => setOpenFolder1(!openFolder1)}
        >
          {openFolder1 ? "📂▼" : "📂▶"} Images Collection
        </button>
        {openFolder1 && (
          <div className="ml-4 mt-1">
            <div className="">🖼️ Image A</div>
            <div className="">🖼️ Image B</div>
          </div>
        )}
      </div>

      {/* Subfolder 2 */}
      <div className="ml-4 mt-2">
        <button
          className="flex items-center focus:outline-none"
          onClick={() => setOpenFolder2(!openFolder2)}
        >
          {openFolder2 ? "📂▼" : "📂▶"} Bookmark Collection
        </button>
        {openFolder2 && (
          <div className="ml-4 mt-1">
          <div className="">🌐 Website URL A</div>
          </div>
        )}
      </div>

      {/* Single File in Root */}
      <div className="ml-4 mt-2 ">📄 Text Notes A</div>
      <div className="ml-4 mt-2 ">📄 Text Notes A</div>
      <div className="ml-4 mt-2 ">✅ ToDo List A</div>
      <div className="ml-4 mt-2 ">✅ ToDo List A</div>
    </div>
  );
}
