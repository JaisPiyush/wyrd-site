import { Button } from "@heroui/button";

export default function DatingRoom({ params }: { params: { id: string } }) {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow flex items-center justify-center">
                <Button>
                    <a href={`https://www.wyrd.live/dating-room/${params.id}/`}>Open in app</a>
                </Button>
            </main>

        </div>
    )
}
