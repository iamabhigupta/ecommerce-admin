import { UserButton, auth } from '@clerk/nextjs';

import StoreSwitcher from '@/components/store-switcher';
import { MainNav } from '@/components/main-nav';
// import { Search } from '@/components/search';
import prismadb from '@/lib/prismadb';
import { redirect } from 'next/navigation';

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }
  const stores = await prismadb.store.findMany();

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          {/* <Search /> */}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
