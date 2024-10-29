const resumeData = require('../../../modules/resume/src/resume.json');
const { basics, work, skills } = resumeData;
import Image from 'next/image';
import Link from 'next/link';

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{basics.name}</h1>
      <p className="text-xl text-gray-700 mb-2">{basics.label}</p>
      <p className="text-gray-500 mb-6">{basics.summary}</p>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          <strong>Email:</strong> {basics.email}
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> {basics.phone}
        </p>
        <p className="text-gray-700">
          <strong>Location:</strong> {basics.location.city}, {basics.location.region}
        </p>
        <div className="flex space-x-4 mt-2">
          {basics.profiles.map((profile, index) => (
            <Link key={index} href={profile.url} className="text-blue-600 hover:underline">
              {profile.network}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        {work.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold">{job.position} - {job.name}</h3>
            <p className="text-gray-500">
              {job.startDate} - {job.endDate} | {job.location}
            </p>
            <p className="text-gray-700 mt-1">{job.summary}</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {job.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-lg font-semibold">{skill.name}</h3>
            <p className="text-gray-700">{skill.keywords.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}