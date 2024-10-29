import Image from 'next/image';
import mendenhallImg from 'public/mendenhall.jpg'; // Import the image statically

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <h1 className="sr-only">Home</h1> {/* Hides this heading for screen readers */}
      <Image
        src={mendenhallImg}
        alt="Face of Mendenhall Glacier, Alaska"
        fill
        className="object-cover object-center hidden md:block"
        priority
      />
    </div>
  );
}
