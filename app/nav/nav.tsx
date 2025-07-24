import { useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex items-center justify-between px-4 py-3 relative">
                {/* Mobile nav: crest and hamburger, side-by-side */}
                <div className="flex md:hidden items-center justify-between w-full">
                    <a href="/" className="block">
                        <img
                            src="/assets/images/club-crest.png"
                            alt="Club Crest"
                            className="w-10"
                        />
                    </a>
                    <button
                        className="flex flex-col justify-center items-center h-10 w-10"
                        onClick={() => {
                            setOpen(o => {
                                console.log("Hamburger tapped. open was", o, "now", !o);
                                return !o;
                            });
                        }}
                        aria-label="Toggle menu"
                        type="button"
                    >
                        <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-white mt-1.5 transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
                        <span className={`block h-0.5 w-6 bg-white mt-1.5 transition-transform duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
                    </button>
                </div>
                {/* Desktop nav: club name + crest, and menu */}
                <div className="hidden md:flex items-center w-full justify-between">
                    <a href="/" className="flex items-center gap-2 text-lg font-bold tracking-wide">
                        Lascelles Hall Cricket Club
                        <img
                            src="/assets/images/club-crest.png"
                            alt="Club Crest"
                            className="w-10"
                        />
                    </a>
                    <ul className="flex space-x-6 text-base font-medium">
                        <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
                        <li><a href="/about" className="hover:text-green-400 transition">About</a></li>
                        <li><a href="/fixtures" className="hover:text-green-400 transition">Fixtures</a></li>
                        <li><a href="/contact" className="hover:text-green-400 transition">Contact</a></li>
                    </ul>
                </div>
            </div>
            {/* Mobile Dropdown Menu */}
            {open && (
                <ul className="md:hidden flex flex-col bg-gray-800 px-4 pb-4 space-y-3 z-20">
                    <li><a href="/" className="hover:text-green-400 transition block py-1" onClick={() => setOpen(false)}>Home</a></li>
                    <li><a href="/about" className="hover:text-green-400 transition block py-1" onClick={() => setOpen(false)}>About</a></li>
                    <li><a href="/fixtures" className="hover:text-green-400 transition block py-1" onClick={() => setOpen(false)}>Fixtures</a></li>
                    <li><a href="/contact" className="hover:text-green-400 transition block py-1" onClick={() => setOpen(false)}>Contact</a></li>
                </ul>
            )}
        </nav>
    );
}
