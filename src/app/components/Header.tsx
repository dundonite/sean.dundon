import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-100 via-sky-400 to-emerald-950 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold text-black">Sean Dundon</h1>
        <nav className="hidden sm:flex gap-6 font-semibold text-white">
          <Link href="/" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white">Home</Link>
          <Link href="/resume" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white">Resume</Link>
          <Link href="/bio" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white">Bio</Link>
          <Link href="/blog" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
