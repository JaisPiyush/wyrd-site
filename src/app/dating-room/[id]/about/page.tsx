
export default async function DatingRoomAbout({ params, searchParams }: {
    params: Promise<{ id: string }>,
    searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
    const id = (await params).id
    const queryParams = (await searchParams);
    const url = new URL(`intent://www.wyrd.live/dating-room/${id}/about`);
    if (queryParams !== undefined) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (Array.isArray(value)) {
                url.searchParams.set(key, value.join(','));
            } else if (value !== undefined) {
                url.searchParams.set(key, value);
            }

        }
    }
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow flex items-center justify-center">
                <a href={`${url.toString()}#Intent;package=live.wyrd.wyrd;scheme=wyrd;action=OPEN_WYRD_PAGE;end;`} className="outline rounded-md px-4 py-2">Open in app</a>
            </main>

        </div>
    )
}
