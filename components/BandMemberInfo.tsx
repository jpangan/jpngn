import { BandMember } from '../data/bandMembers';
import Link from 'next/link';

export default function BandMemberInfo({ member }: { member: BandMember }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{member.name}</h1>
      <p className="text-xl mb-2">{member.position}</p>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Instruments</h2>
      <ul className="list-disc list-inside mb-4">
        {member.instruments.map((instrument, index) => (
          <li key={index}>{instrument}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Music Influence</h2>
      <p className="mb-4">{member.musicInfluence}</p>
      <h2 className="text-2xl font-semibold mb-2">Top 10 Written Songs</h2>
      <ol className="list-decimal list-inside">
        {member.topSongs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ol>
      <Link href="/" className="block mt-6 text-blue-600 hover:underline">
        Back to Main Page
      </Link>
    </div>
  );
}

