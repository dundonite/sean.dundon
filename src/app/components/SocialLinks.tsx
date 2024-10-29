import Link from 'next/link';

const SocialLinks = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-2">Connect with me</h2>
      <ul className="list-disc pl-5">
        <li>
          <Link href="https://github.com/dundonite" className="hover:text-blue-600">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/sean-dundon" className="hover:text-blue-600">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://www.chess.com/member/dundonite" className="hover:text-blue-600">
            Chess.com
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-blue-600">
            Facebook (Placeholder)
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-blue-600">
            Steam (Placeholder)
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
