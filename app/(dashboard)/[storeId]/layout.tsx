import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import prismadb from '@/prisma/prismadb';

interface Props {
  children: React.ReactNode;
  params: {
    storeID: string;
  };
}

export default async function DashboardLayout({ children, params }: Props) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeID,
      userId,
    },
  });

  if (!store) {
    redirect('/');
  }

  return (
    <>
      <div>Navbar</div>
      <div>{children}</div>
    </>
  );
}
