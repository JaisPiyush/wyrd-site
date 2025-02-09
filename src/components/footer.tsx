import Link from "next/link";

const Footer = () => (
    <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Wyrd</h3>
                    <p>Speed Dating, Re-imagined</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/privacy-policy" className="hover:underline">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/delete-account" className="hover:underline">
                                Delete account
                            </Link>
                        </li>
                        <li>
                            <Link href="/cssp" className="hover:underline">
                                Child Safety Standards
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link href="https://www.linkedin.com/company/wyrd-app/" className="hover:text-primary">
                            <span className="sr-only">Linked In</span>
                            <svg className="h-6 w-6" fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 310 310" >
                                <g id="XMLID_801_">
                                    <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                                    <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                                    <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"/>
                                </g>
                            </svg>
                        </Link>
                        {/* <Link href="#" className="hover:text-primary">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </Link> */}
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                <p>&copy; {new Date().getFullYear()} Wyrd. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;