import { Button } from "@heroui/button";
import Link from "next/link";


export default async function DatingRoom({ params }: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow flex items-center justify-center">
                <a href={`https://www.wyrd.live/dating-room/${id}/`} className="outline rounded-md px-4 py-2">Open in app</a>
            </main>

        </div>
    )
}
