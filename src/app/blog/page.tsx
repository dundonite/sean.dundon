import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogPostListItem from '@components/BlogPostListItem';

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  thumbnail: string;
  slug: string;
  altText: string;
}

export default function Blog() {
  const posts = getPosts();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div>
        {posts.map((post) => (
          <BlogPostListItem
            key={post.slug}
            title={post.title}
            date={post.date}
            summary={post.summary}
            thumbnail={post.thumbnail}
            href={`/blog/${post.slug}`}
            altText={post.altText}
          />
        ))}
      </div>
    </div>
  );
}

function getPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'src/app/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
      thumbnail: `/${data.thumbnail}`,
      slug: filename.replace('.md', ''),
      altText: `Thumbnail for ${data.title}`,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
