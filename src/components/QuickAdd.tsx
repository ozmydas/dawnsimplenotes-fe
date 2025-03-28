"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function QuickAdd() {
    const router = useRouter();

    return <div className="w-full bg-gray-950 opacity-80 rounded-4xl shadow-md shadowx-[purple] p-6 border border-gray-600 mb-10 text-center animated-box">
        <Link className="cursor-pointer" href="/create">
            <h2 className="text-2xl mb-4">🤔<br />What's In Your Mind?</h2>
            <p>Click Here to Add New Notes...</p>
        </Link>
    </div>
}