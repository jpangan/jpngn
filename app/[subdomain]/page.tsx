 import BandMemberInfo from '@/components/BandMemberInfo';
import { bandMembers } from '@/members/members';

export default function BandMemberPage({ params }: { params: { subdomain: string } }) {
  const member = bandMembers.find(m => m.subdomain === params.subdomain);

  if (!member) {
    return <div>Band member not found</div>;
  }

  return <BandMemberInfo member={member} />;
}

