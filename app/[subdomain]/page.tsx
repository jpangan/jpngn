 import { PageProps } from '@/.next/types/app/layout';
import BandMemberInfo from '@/components/BandMemberInfo';
import { bandMembers } from '@/members/members';



export default function BandMemberPage({ params }: PageProps
) {
  const member = bandMembers.find(async (m) => {
    const subdomain = await params?.then((p) => p.subdomain);

    // Handle undefined or null subdomain case if needed
    if (!subdomain) {
      console.error("Subdomain is undefined");
      return false;
    }

    return m.subdomain === subdomain;
  });

  if (!member) {
    return <div>Band member not found</div>;
  }

  return <BandMemberInfo member={member} />;
}

