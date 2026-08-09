

function SkillBar({ name, percent }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-[#EAF2F0]">{name}</span>
        <span className="text-xs text-[#6B7A76]">{percent}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-[#152420]">
        <div
          className="h-1.5 rounded-full bg-[#5DCAA5]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ label, items }) {
  return (
    <div className="rounded-xl border border-[#1F2B27] bg-[#0E1917] p-6">
      <h4 className="mb-5 text-sm font-semibold text-[#5DCAA5]">{label}</h4>
      {items.map((item) => (
        <SkillBar key={item.name} name={item.name} percent={item.percent} />
      ))}
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      label: "FRONTEND",
      items: [
        { name: "React", percent: 90 },
        { name: "Tailwind CSS", percent: 90 },
        { name: "TypeScript", percent: 85 },
        { name: "React Native", percent: 60 },
      ],
    },
    {
      label: "BACKEND",
      items: [
        { name: "Java / Spring Boot", percent: 65 },
        { name: "Node.js / Express.js", percent: 65 },
        { name: "Python", percent: 60 },
        { name: "Kotlin", percent: 55 },
      ],
    },
    {
      label: "DATABASE",
      items: [
        { name: "MySQL", percent: 88 },
        { name: "MongoDB", percent: 85 },
        { name: "PostgreSQL", percent: 70 },
      ],
    },
    {
      label: "CLOUD & DEVOPS",
      items: [
        { name: "Linux (Ubuntu)", percent: 65 },
        { name: "Docker", percent: 60 },
        { name: "Netlify / Railway.app", percent: 80 },
        { name: "Kubernetes", percent: 35 },
        { name: "DigitalOcean", percent: 35 },
        { name: "AWS (EC2, S3, RDS)", percent: 30}
      ],
    },
    {
      label: "TOOLS & LIBRARIES",
      items: [
        { name: "Git / GitHub", percent: 85 },
        { name: "REST API Design", percent: 80 },
        { name: "Redux", percent: 75 },
        { name: "Axios", percent: 80 },
        { name: "Chart.js", percent: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#0A1613] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold tracking-widest text-[#5DCAA5]">
          TECHNICAL SKILLS
        </p>
        <h2 className="font-serif text-4xl leading-tight text-[#EAF2F0] sm:text-5xl">
          Tools of the trade.
        </h2>
        <p className="mt-3 max-w-xl text-base text-[#A9B8B3]">
          A curated list of technologies I work with on a daily basis, both
          professionally and personally.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.label}
              label={category.label}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}