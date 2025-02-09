export default function ChildSafetyStandardsPage() {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-8">Child Safety Standards</h1>
                <p className="text-sm text-gray-600 mb-8">Last Updated Jan 30, 2025</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">TL;DR – Wyrd's Child Safety Policy</h2>
                        <p>Wyrd is strictly for users aged 19 and above. We use age verification to prevent underage access. Our in-app reporting system and direct contact via phone or email allow users to report concerns. To ensure safe interactions, we employ AI-based sexual exploitation blockers in our chat system. We take all reports seriously, enforce strict actions against violations, and continuously improve our safety measures.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Age Restrictions</h2>
                        <p>Wyrd is exclusively for individuals aged 19 years and above. We employ rigorous age verification processes to prevent underage users from accessing our platform. Any accounts found to belong to individuals under 19 will be immediately suspended and investigated.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Reporting and Feedback</h2>
                        <p>We take user safety seriously. Wyrd offers an in-app reporting mechanism that allows users to quickly and easily report any inappropriate behavior or content. In addition, users can reach out directly through:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Phone: +91-8860160029</li>
                            <li>Email: business@wyrd.live</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">AI-Based Protection</h2>
                        <p>To further enhance safety, Wyrd integrates an AI-based sexual exploitation blocker within our chat system, provided by our chat provider. This technology automatically detects and prevents inappropriate and exploitative content, ensuring a safer communication space for all users.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Continuous Improvement</h2>
                        <p>We are committed to continuously improving our safety standards. Feedback from our community is invaluable, and we encourage users to share their experiences and suggestions to help us create a safer platform for everyone.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Enforcement</h2>
                        <p>Violations of our child safety standards can result in actions ranging from warnings to permanent account suspension, depending on the severity of the violation. We reserve the right to involve law enforcement agencies if deemed necessary.</p>
                    </section>

                    <section className="border-t pt-8 mt-8">
                        <p>By using Wyrd, you agree to adhere to our safety standards and contribute to a respectful and safe community.</p>
                        <p className="mt-4">For any concerns or more information regarding our Child Safety Standard Policy, please contact us at business@wyrd.live</p>
                    </section>
                </div>
            </main>


        </div>
    );
}