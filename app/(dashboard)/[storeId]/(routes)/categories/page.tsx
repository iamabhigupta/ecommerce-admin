import prismadb from '@/lib/prismadb';
import BillboardClient from './components/client';
import { BillboardColumns } from './components/columns';
import { format } from 'date-fns';

const Billboards = async ({
  params,
}: {
  params: {
    stroeId: string;
  };
}) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      id: params.stroeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formatedBillboard: BillboardColumns[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formatedBillboard} />
      </div>
    </div>
  );
};

export default Billboards;
