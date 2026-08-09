import Skills from "../components/Skills";


function TechTag({ children }) {
    return (
        <span className="rounded-full bg-[#152420] px-3 py-1 text-xs text-[#A9B8B3]">
            {children}
        </span>
    );
}

function SkillCategory({ label, items }) {
    return (
        <div className="rounded-xl border border-[#1F2B27] bg-[#0E1917] p-6">
            <h4 className="text-sm font-semibold text-[#5DCAA5]">{label}</h4>
            <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                    <TechTag key={item}>{item}</TechTag>
                ))}
            </div>
        </div>
    );
}

function ProfileImage() {
    return (
        <img
            src="https://ui-avatars.com/api/?name=Aditya+Kumar&background=1D9E75&color=EAF2F0&size=320&font-size=0.33&bold=true"
            alt="Aditya Kumar"
            className="h-56 w-56 rounded-2xl border border-[#1F2B27] object-cover md:h-64 md:w-64"
        />
    );
}


export default function AboutPage() {
    
    const education = [
        {
            degree: "[Add your degree, e.g. B.Tech in Computer Science]",
            institution: "[Add your college / university name]",
            years: "[Add start–end year]",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0A1613]">


            {/* About Me */}
            <section className="px-6 py-20">
                <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[auto_1fr]">
                    <ProfileImage />

                    <div>
                        <p className="mb-4 text-xs font-semibold tracking-widest text-[#5DCAA5]">
                            ABOUT ME
                        </p>
                        <h1 className="font-serif text-4xl leading-tight text-[#EAF2F0] sm:text-5xl">
                            Bringing ideas to life
                            <br />
                            through <span className="text-[#5DCAA5]">code and clarity.</span>
                        </h1>

                        <div className="mt-6 space-y-4 text-base leading-relaxed text-[#A9B8B3]">
                            <p>
                                I'm a full stack developer who enjoys building things end to end —
                                from REST APIs in Spring Boot to responsive interfaces in React. I
                                care about clean code and interfaces that just make sense.
                            </p>
                            <p>
                                I'm always picking up new tools — lately that's meant going deeper
                                into Docker, Linux, and React Native, alongside the stack I already
                                build with daily.
                            </p>
                            <p className="italic text-[#6B7A76]">
                                {/* Placeholder — swap in your real interests */}
                                Outside of code, I'm figuring out what goes here — add a line about
                                what you do when you're not building.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#A9B8B3]">
                            <span className="flex items-center gap-1.5">
                                <span className="text-[#5DCAA5]">&#128205;</span>Gaya, India
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-[#5DCAA5]">&#9749;</span>Fueled by chai
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-[#5DCAA5]">&lt;/&gt;</span>Open to work
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Skills */}
            <Skills />

            {/* Education */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-4 text-xs font-semibold tracking-widest text-[#5DCAA5]">
                        EDUCATION
                    </p>
                    <h2 className="font-serif text-4xl leading-tight text-[#EAF2F0] sm:text-5xl">
                        Academic background.
                    </h2>

                    <div className="mt-10 space-y-5">
                        {education.map((item) => (
                            <div
                                key={item.degree}
                                className="rounded-xl border border-[#1F2B27] bg-[#0E1917] p-6"
                            >
                                <h4 className="font-serif text-2xl text-[#EAF2F0]">{item.degree}</h4>
                                <p className="mt-2 text-sm text-[#A9B8B3]">{item.institution}</p>
                                <p className="mt-1 text-sm text-[#6B7A76]">{item.years}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}