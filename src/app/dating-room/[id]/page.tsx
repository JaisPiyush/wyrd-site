

export default async function DatingRoom({ params }: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow flex items-center justify-center">
                <a href={`intent://www.wyrd.live/#Intent;package=live.wyrd.wyrd;scheme=wyrd;action=OPEN_WYRD_PAGE;S.path=%2Fdating-room%2F${id};end;`} className="outline rounded-md px-4 py-2">Open in app</a>
            </main>

        </div>
    )
}
