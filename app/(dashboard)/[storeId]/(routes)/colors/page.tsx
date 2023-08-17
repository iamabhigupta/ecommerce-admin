import prismadb from '@/lib/prismadb';
import ColorClient from './components/client';
import { ColorColumns } from './components/columns';
import { format } from 'date-fns';

const Colors = async ({
  params,
}: {
  params: {
    stroeId: string;
  };
}) => {
  const colors = await prismadb.color.findMany({
    where: {
      id: params.stroeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formatedColor: ColorColumns[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formatedColor} />
      </div>
    </div>
  );
};

export default Colors;
