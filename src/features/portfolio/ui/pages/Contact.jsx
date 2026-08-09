import { useForm } from "react-hook-form";

export default function Contact() {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    return (
        <section id="contact" className=" px-6 py-24">
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
                {/* Left column */}
                <div>
                    <p className="mb-4 text-xs font-semibold tracking-widest text-[#5DCAA5]">
                        CONTACT
                    </p>
                    <h2 className="font-serif text-4xl leading-tight text-[#EAF2F0] sm:text-5xl">
                        Let's build something
                        <br />
                        <span className="text-[#5DCAA5]">together.</span>
                    </h2>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-[#A9B8B3]">
                        Got a project, an opportunity, or just want to talk shop? My inbox is
                        open — I usually reply within a day or two.
                    </p>

                    <div className="mt-8 space-y-3 text-sm">
                        <a
                            href="mailto:adityakr@gmail.com"
                            className="block text-[#EAF2F0] hover:text-[#5DCAA5]"
                        >
                            birbalkr1435@gmail.com
                        </a>
                        <p className="text-[#6B7A76]">Gaya, Bihar, India</p>
                    </div>

                    <div className="mt-8 flex items-center gap-5">
                        <a
                            href="https://github.com/adityakr1"
                            aria-label="GitHub"
                            className="text-[#A9B8B3] hover:text-[#5DCAA5]"
                        >
                            {/* <IconGithub /> */}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aditya-kumar-697381260"
                            aria-label="LinkedIn"
                            className="text-[#A9B8B3] hover:text-[#5DCAA5]"
                        >
                            {/* <IconLinkedin /> */}
                        </a>
                    </div>
                </div>

                {/* Right column — form */}
                <form
                    onSubmit={handleSubmit((data) => {
                        console.log(data);
                        reset();
                    })}
                    className="rounded-2xl border border-[#1F2B27] bg-[#0E1917] p-8"
                >
                    <div className="mb-5">
                        <label htmlFor="name" className="mb-2 block text-sm text-[#A9B8B3]">
                            Name
                        </label>
                        <input
                            {...register("name", { required: true, maxLength: 80 })}
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="w-full rounded-lg border border-[#2C3B37] bg-[#0A1613] px-4 py-3 text-sm text-[#EAF2F0] placeholder-[#6B7A76] outline-none focus:border-[#5DCAA5]"
                        />
                        {errors.name && <span className="text-[#E24B4A] text-sm">This field is required</span>}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="mb-2 block text-sm text-[#A9B8B3]">
                            Email
                        </label>
                        <input
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-[#2C3B37] bg-[#0A1613] px-4 py-3 text-sm text-[#EAF2F0] placeholder-[#6B7A76] outline-none focus:border-[#5DCAA5]"
                        />
                        {errors.email && <span className="text-[#E24B4A] text-sm">This field is required</span>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="mb-2 block text-sm text-[#A9B8B3]">
                            Message
                        </label>
                        <textarea
                        {...register("message", { required: true })}
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="What are you looking to build?"
                            className="w-full resize-none rounded-lg border border-[#2C3B37] bg-[#0A1613] px-4 py-3 text-sm text-[#EAF2F0] placeholder-[#6B7A76] outline-none focus:border-[#5DCAA5]"
                        />
                        {errors.message && <span className="text-[#E24B4A] text-sm">This field is required</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full rounded-full bg-[#F4A93B] px-6 py-3 text-sm font-semibold text-[#0E4F4A] hover:bg-[#f5b658] disabled:opacity-60"
                    >
                        {status === "sending" ? "Sending..." : "Send message"}
                    </button>

                    {status === "sent" && (
                        <p className="mt-4 text-center text-sm text-[#5DCAA5]">
                            Thanks! Your message has been sent — I'll get back to you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="mt-4 text-center text-sm text-[#E24B4A]">
                            Something went wrong. Try again, or email me directly at
                            adityakr@gmail.com.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}