import { bandMembers } from '@/members/members';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Led Zeppelin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bandMembers.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
            <p className="mb-2">{member.position}</p>
            <Link
              href={`http://${member.subdomain}.${process.env.NODE_ENV === 'development' ? 'localhost:3000' : 'jpngn.com'}`}
              className="text-blue-600 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

