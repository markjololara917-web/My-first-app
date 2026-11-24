
export const metadata = {
  title: "Projects | Markjolo Lara",
};

const projects = [
  {
    id: 1,
    name: "My First Website",
    description: "A personal website built using Next.js.",
  },
  {
    id: 2,
    name: "ClassReady",
    description: "A classroom readiness monitoring system.",
  },
  {
    id: 3,
    name: "GeoQuest",
    description: "A mobile game project built with Flutter.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        My Projects
      </h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-xl p-5 shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {project.name}
            </h2>

            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
