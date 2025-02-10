export default function PrivacyPolicyPage() {
    return (<div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                    <p>Welcome to Wyrd. Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use the Wyrd application (&quot;App&quot;) and related services (&quot;Services&quot;).</p>
                    <p className="mt-2">By using Wyrd, you agree to the practices described in this Privacy Policy. If you do not agree with the terms of this policy, please do not use our App or Services.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                    <h3 className="text-xl font-semibold mt-4 mb-2">2.1 Personal Information</h3>
                    <ul className="list-disc pl-6">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Date of birth</li>
                        <li>Gender</li>
                        <li>Profile information (e.g., photos, interests, and bios)</li>
                        <li>Verification details (e.g., college ID, LinkedIn profile)</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-4 mb-2">2.2 Usage Data</h3>
                    <ul className="list-disc pl-6">
                        <li>App interactions (e.g., matches, messages, preferences)</li>
                        <li>Device information (e.g., device type, operating system)</li>
                        <li>Log data (e.g., IP address, timestamps, crash reports)</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-4 mb-2">2.3 Location Data</h3>
                    <p>Approximate location for matching purposes, with user consent.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc pl-6">
                        <li>Provide and improve the App and Services.</li>
                        <li>Match you with other users based on preferences and interests.</li>
                        <li>Verify your identity and ensure a safe user environment.</li>
                        <li>Communicate with you about updates, promotions, and support.</li>
                        <li>Comply with legal obligations and enforce our Terms of Use.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
                    <p>We do not sell your personal information. We may share your data in the following circumstances:</p>
                    <ul className="list-disc pl-6">
                        <li>With other users: Your profile information will be visible to other users.</li>
                        <li>With service providers: We may share data with vendors or partners that assist in app functionality, hosting, analytics, or customer support.</li>
                        <li>Legal compliance: If required by law, subpoena, or other legal processes.</li>
                        <li>With your consent: When you explicitly agree to share your information.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                    <p>Depending on your location, you may have the following rights:</p>
                    <ul className="list-disc pl-6">
                        <li>Access, correct, or delete your personal data.</li>
                        <li>Restrict or object to the processing of your information.</li>
                        <li>Withdraw consent where processing is based on your consent.</li>
                        <li>File a complaint with a regulatory authority.</li>
                    </ul>
                    <p className="mt-2">To exercise these rights, contact us at business@wyrd.live.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
                    <p>We take reasonable measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no security system is foolproof, and we cannot guarantee absolute security.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
                    <p>We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
                    <p>Wyrd is not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If we become aware that a minor has provided us with personal information, we will delete it immediately.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">9. International Users</h2>
                    <p>If you are accessing Wyrd from outside India, your information may be transferred, stored, and processed in India or other countries where our service providers are located. By using the App, you consent to these transfers.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting the updated policy. We encourage you to review this Privacy Policy periodically.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                    <p className="mt-2">Email: business@wyrd.live</p>
                    <address className="mt-2 not-italic">
                        S-55, 10TH FLOOR, URBTECH NPX TOWER,<br />
                        SECTOR 153, NOIDA, UTTAR PRADESH,<br />
                        INDIA, PIN-201306
                    </address>
                </section>

                <p className="mt-8 text-center">Thank you for trusting Wyrd with your personal information.</p>
            </div>
        </main>
    </div>);
}