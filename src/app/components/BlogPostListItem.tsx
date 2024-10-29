import Link from 'next/link';
import Image from 'next/image';

interface BlogPostListItemProps {
  title: string;
  date: string;
  summary: string;
  thumbnail: string;
  href: string;
  altText: string;
}

const BlogPostListItem = ({ title, date, summary, thumbnail, href, altText }: BlogPostListItemProps) => {
  return (
    <div className="flex items-center mb-6">
      <Image
        src={thumbnail}
        alt={altText}
        width={120}  // Thumbnail width in pixels
        height={120} // Thumbnail height in pixels
        className="rounded mr-4"
      />
      <div>
        <h2 className="text-xl font-bold mb-2">
          <Link href={href} className="text-blue-600 hover:underline">
            {title}
          </Link>
        </h2>
        <p className="text-gray-500 mb-2">{date}</p>
        <p className="text-gray-700">{summary}</p>
      </div>
    </div>
  );
};

export default BlogPostListItem;
