import Link from 'next/link'

function Header() {

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Sean Dundon
      </h1>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <Link className="hover:text-gray-500" href="/">Home</Link>
        <Link className="hover:text-gray-500" href="/resume">Resume</Link>
        <Link className="hover:text-gray-500" href="/links">Links</Link>
      </nav>
    </header>
  );
}

export default Header;
