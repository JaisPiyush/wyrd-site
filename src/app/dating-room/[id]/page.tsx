import { Button } from "@heroui/button";
import Link from "next/link";


export default async function DatingRoom({ params }: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow flex items-center justify-center">
                <Button>
                    <Link href={`https://www.wyrd.live/dating-room/${id}/`}>Open in app</Link>
                </Button>
            </main>

        </div>
    )
}
