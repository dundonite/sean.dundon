import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/app/posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/app/posts', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-500 mb-2">By {data.author} on {data.date}</p>
      {data.thumbnail && (
        <div className="mb-6">
          <Image
            src={`/${data.thumbnail}`}
            alt={data.title}
            width={800}
            height={400}
            className="rounded"
          />
        </div>
      )}
      <div
        className="prose max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
