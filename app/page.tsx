import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, my name is Markjolo Lara</h1>

      <p>
        I am an IT student interested in programming and
        technology. I enjoy learning new things and
        developing my skills in web development.
      </p>

      <Link href="/projects">See my projects</Link>
    </main>
  );
}