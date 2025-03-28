export default function SearchBar() {
    return <div
        className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 lg:mx-40"
    >

        {/* Search Input */}
        <input
            type="text"
            placeholder="Search words..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-500"
        />

        {/* Select Dropdown */}
        <select
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4 focus:ring-2 focus:ring-blue-500"
        >
            <option value="">All Types</option>
            <option value="text">Text</option>
            <option value="list">Todo List</option>
            <option value="image">Image Link</option>
        </select>

        {/* Date Range Input */}
        <input
            type="date"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-15 px-6 shadow-lg transition-all duration-300 cursor-pointer rounded-2xl">
            🔍 Submit
        </button>

    </div>
}
