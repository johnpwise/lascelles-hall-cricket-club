import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Lascelles Hall Cricket Club" },
        { name: "description", content: "Welcome to Lascelles Hall Cricket Club." },
    ];
}

export default function Home() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url('/assets/images/cricket-hero.png')`,
            }}
        >
            <div className="bg-black/60 rounded-xl p-8 text-center max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-200 drop-shadow">
                    Lascelles Hall Cricket Club
                </h1>
                <img
                    src="/assets/images/club-crest.png"
                    alt="Club Crest"
                    className="relative ml-auto mr-auto w-40 md:w-72 opacity-75 pointer-events-none select-none object-contain"
                    style={{ zIndex: 0 }}
                    aria-hidden="true"
                />
                <p className="text-xl text-green-100 mb-8 drop-shadow">
                    Welcome to the official site of Lascelles Hall Cricket Club. News, fixtures, and more.
                </p>
            </div>
        </div>
    );
}
