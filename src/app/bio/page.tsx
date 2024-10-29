import Image from 'next/image';
import SocialLinks from '../components/SocialLinks';
import profileImg from 'public/profile.png';

export default function Bio() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Bio</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="text-lg text-gray-700 md:w-1/2">
          <p className="mb-4">
            I'm a passionate leader with a strong background in product management, Linux administration, and software development. Based in Houston, I thrive in dynamic environments and enjoy creating impactful solutions.
          </p>
          <p className="mb-4">
            Family, culture, and innovation inspire me. I enjoy balancing my professional life with hobbies and time spent with my family and my energetic poodle.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={profileImg}
            alt="A photo of me"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}
