import { NavLink } from "react-router";

export default function NotFoundPage() {
    return (
        <main className="flex min-h-[calc(100vh-19rem)] items-center justify-center px-6 py-20">
            <section className="w-full max-w-xl rounded-3xl border border-[#1F2B27] bg-[#0E1917]/80 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-12">
                <p className="font-mono text-sm tracking-[0.3em] text-[#5DCAA5]">ERROR 404</p>
                <h1 className="mt-5 font-serif text-6xl text-[#EAF2F0] sm:text-8xl">Lost in the stack.</h1>
                <p className="mx-auto mt-5 max-w-md leading-relaxed text-[#A9B8B3]">
                    The page you&apos;re looking for doesn&apos;t exist or may have moved to
                    another route.
                </p>
                <NavLink
                    to="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1D9E75] px-6 py-3 text-sm font-semibold text-[#04342C] transition hover:bg-[#5DCAA5]"
                >
                    Back to home
                    <span aria-hidden="true">{"\u2197"}</span>
                </NavLink>
            </section>
        </main>
    );
}
