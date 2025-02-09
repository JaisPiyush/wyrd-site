import { Image } from "@heroui/image";

export default function DeleteAccountPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow items-center container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-8 mt-10">Delete Account</h1>
                <div className="space-y-8">
                    <Image
                        src="/account_page.jpg"
                        className="w-56"
                    />
                </div>

                <h3 className="text-xl font-semibold mt-4 mb-2">You can delete your wyrd account from app.</h3>
                <ul className="list-disc pl-6">
                    <li>Go to <strong>My Profile</strong></li>
                    <li>Click on <strong>Delete Account</strong></li>
                    <li>Confirm for deleting your account</li>
                </ul>


            </main>
        </div>
    );
}