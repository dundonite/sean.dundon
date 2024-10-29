import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <h1 className="sr-only">Home</h1> {/* Hides this heading for screen readers */}
      <Image
        src='/mendenhall.jpg'
        alt="Face of Mendenhall Glacier, Alaska"
        fill
        className="object-cover object-center hidden md:block"
        priority
      />
    </div>
  );
}
