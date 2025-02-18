import { Button } from "@heroui/button";

export default function DatingRoomAbout({ params }: { params: { id: string } }) {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow flex items-center justify-center">
                <Button>
                    <a href={`https://www.wyrd.live/dating-room/${params.id}/about/`}>Open in app</a>
                </Button>
            </main>

        </div>
    )
}
