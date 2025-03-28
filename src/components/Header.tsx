import { Ghost } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full">
            <div className="container mx-auto text-center">
                <h1 className="text-2xl font-bold pt-15 pb-0">D<span className="ghost transform scale-170 -translate-y-1"><Ghost /></span>mn Simple Notes</h1>
                <p className='my-4 py-4 text-lg text-gray-400 mt-2'>Just for Fun and Experimental Personal Project 😁<br /> Made with ⚛️ Next.js + 🌀 Tailwind + 🦀 Rust</p>
            </div>
        </header>
    );
}
