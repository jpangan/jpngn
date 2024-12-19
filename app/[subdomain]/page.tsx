 import { PageProps } from '@/.next/types/app/layout';
import BandMemberInfo from '@/components/BandMemberInfo';
import { bandMembers } from '@/members/members';



export default function BandMemberPage({ params }: PageProps
) {
  //@ts-ignore
  const member = bandMembers.find(m => m.subdomain === params?.subdomain);

  if (!member) {
    return <div>Band member not found</div>;
  }

  return <BandMemberInfo member={member} />;
}

