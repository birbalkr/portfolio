import { Link } from "react-router";
import {
  // Github,
  Mail,
  ArrowUpRight,
  Code2,
  Folder,
  Trophy,
  GraduationCap,
  Smartphone,
} from "lucide-react";
import { BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoReact } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

function About() {
  const skills = [
    "React.js",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "MySQL",
  ];

  const stats = [
    { number: "04", label: "Projects", icon: <Folder className="mb-4 text-lime-600" size={28} /> },
    { number: "01", label: "Hackathon", icon: <Trophy className="mb-4 text-lime-600" size={28} /> },
    { number: "04", label: "Projects", icon: <Code2 className="mb-4 text-lime-600" size={28} /> },
    { number: "MCA", label: "Final Year", icon: <GraduationCap className="mb-4 text-lime-600" size={28} /> },
  ];

  return (
    <section className="relative bg-background px-6 pt-10 text-foreground">
      <div className="mx-auto max-w-6xl">

        <div className="grid items-center gap-16 py-20 lg:grid-cols-2">

          <div>
            <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-lime-600">
              HELLO, I'M BIRBAL
            </p>

            <h1 className="font-serif text-5xl leading-tight sm:text-6xl">
              More about
              <br />
              <span className="text-lime-500">who I am.</span>
            </h1>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600">
              <p>
                I'm Birbal, an MCA final-year student and Full Stack
                Developer who enjoys turning ideas into useful web and
                mobile applications. I work with React, React Native,
                Node.js, and MongoDB, and enjoy building both user-friendly
                interfaces and reliable backend systems.
              </p>
              <p className="text-base leading-8 text-gray-600">
                I'm always curious to learn new technologies and improve through hands-on
                projects. Currently, I'm exploring AI Engineering, Next.js, and system
                design. I'm looking for a junior software developer opportunity where I can
                contribute, learn from experienced developers, and grow as an engineer.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/project"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-medium transition hover:opacity-80"
              >
                View Projects
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-foreground px-7 py-3 font-medium transition hover:bg-foreground hover:text-background"
              >
                Let's Talk
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://github.com/birbalkr"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition hover:text-lime-600"
              >
                {/* <Github size={21} /> */}
              </a>

              <a
                href="mailto:birbalkr1435@gmail.com"
                aria-label="Email"
                className="transition hover:text-lime-600"
              >
                <Mail size={21} />
              </a>

              <span className="h-6 w-px bg-gray-300" />

              <span className="text-sm text-gray-500">
                Based in Gaya, India
              </span>
            </div>
          </div>


          <div>
            right
          </div>

        </div>


        <div className="grid grid-cols-2 gap-20  p-5 items-start">
          <div className="flex-1 justify-center items-center">
            <div>
              <span className="gap-2 items-center m-2 bg-accent border p-2 rounded-xl">Skills</span>
            </div>
            <div className="flex gap-2 items-center p-1 m-2">
              <div><BiLogoReact size={20} className="text-headingcolor" /></div>
              <div>React</div>
            </div>

            <div className="flex gap-2 items-center p-1 m-2">
              <div><Smartphone size={20} className="text-headingcolor" /></div>
              <div>React Native</div>
            </div>

            <div className="flex gap-2 items-center p-1 m-2">
              <div><BiLogoNodejs size={20} className="text-headingcolor" /></div>
              <div>Node.js</div>
            </div>

            <div className="flex gap-2 items-center p-1 m-2">
              <div><SiExpress size={20} className="text-headingcolor" /></div>
              <div>Express.js</div>
            </div>

            <div className="flex gap-2 items-center p-1 m-2">
              <div><BiLogoMongodb size={20} className="text-headingcolor" /></div>
              <div>MongoDB</div>
            </div>

            <div className="flex gap-2 items-center p-1 m-2">
              <div><BiLogoPostgresql size={20} className="text-headingcolor" /></div>
              <div>Postgresql</div>
            </div>
          </div>

          <div className="grid gap-5 grid-cols-2">
            {stats.map((stat) => (
              <div
                key="{stat.label}"
                className="rounded-2xl border border-black/10 p-7 transition hover:-translate-y-1"
              >
                <div>{stat.icon}</div>
                <h2 className="font-serif text-4xl text-foreground">{stat.number}</h2>
                <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>




        </div>

        {/* Skills Section */}
        {/* <div className="border-t border-black/10 py-16">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-lime-600">
            MY TOOLKIT
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-gray-500">
            These are some of the tools and technologies I use to
            build web applications, mobile apps, and backend systems.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/15 px-5 py-3 text-sm transition hover:border-accent hover:bg-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </div> */}

        {/* What I Enjoy */}
        {/* <div className="grid gap-6 border-t border-black/10 py-16 md:grid-cols-3">
          <div>
            <Code2 className="mb-4 text-lime-600" size={28} />
            <h3 className="font-serif text-xl">Building for Web</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Creating responsive interfaces and useful applications.
            </p>
          </div>

          <div>
            <Smartphone className="mb-4 text-lime-600" size={28} />
            <h3 className="font-serif text-xl">Mobile Development</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Exploring mobile experiences with React Native.
            </p>
          </div>

          <div>
            <Lightbulb className="mb-4 text-lime-600" size={28} />
            <h3 className="font-serif text-xl">Learning & Exploring</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Learning new technologies and solving practical problems.
            </p>
          </div>
        </div> */}

      </div>
    </section>
  );
}

export default About;