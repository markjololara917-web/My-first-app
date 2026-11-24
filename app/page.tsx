
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Hello, my name is Markjolo Lara
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        I am an IT student interested in programming
        and technology. I enjoy learning new things
        and developing my skills in web development.
      </p>

      <Link
        href="/projects"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        See my projects
      </Link>
    </main>
  );
}
