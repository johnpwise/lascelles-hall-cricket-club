export default function About() {
    return (
        <div className="flex-1 flex items-center justify-center relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
            {/* Watermark Crest */}
            <img
                src="/assets/images/club-crest.png"
                alt="Club Crest"
                className="absolute bottom-4 right-4 w-28 md:w-48 opacity-10 dark:opacity-20 pointer-events-none select-none object-contain"
                aria-hidden="true"
                style={{ zIndex: 0 }}
            />
            <main className="flex-1 flex items-center justify-center relative z-10">
                <div className="p-8 bg-white/80 dark:bg-gray-800/90 rounded-xl shadow-lg max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">About Us</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Lascelles Hall Cricket Club is one of the region’s oldest cricket clubs, dedicated to community and the spirit of cricket...
                    </p>
                </div>
            </main>
        </div>
    );
}
