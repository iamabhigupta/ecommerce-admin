import prismadb from '@/lib/prismadb';
import SizeClient from './components/client';
import { SizeColumns } from './components/columns';
import { format } from 'date-fns';

const Sizes = async ({
  params,
}: {
  params: {
    stroeId: string;
  };
}) => {
  const sizes = await prismadb.size.findMany({
    where: {
      id: params.stroeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formatedSize: SizeColumns[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeClient data={formatedSize} />
      </div>
    </div>
  );
};

export default Sizes;
