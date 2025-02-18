import { Button } from "@heroui/button";


export default async function DatingRoomAbout({ params }: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow flex items-center justify-center">
                <Button>
                    <a href={`https://www.wyrd.live/dating-room/${id}/about/`}>Open in app</a>
                </Button>
            </main>

        </div>
    )
}
