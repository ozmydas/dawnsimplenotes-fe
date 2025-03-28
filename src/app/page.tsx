import Header from "@/components/Header";
import NoteItem from "@/components/NoteItem";
import QuickAdd from "@/components/QuickAdd";
import SearchBar from "@/components/SearchBar";
import TagsBar from "@/components/TagsBar";
import SideBar from "@/components/SideBar";

export default function Page() {

  /*********************/

  return <div>

    <SearchBar />

    <TagsBar />

    <div className="container mx-auto flex flex-col md:flex-row my-10">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 xl:w-1/4 p-4 sticky top-0 h-screen">
        <SideBar />
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-2/3 xl:w-3/4 p-4">

        <QuickAdd />

        {/* looping item */}

        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />

        {/* end looping item */}


      </main>
    </div>
  </div>
}