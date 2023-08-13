import prismadb from '@/prisma/prismadb';

interface Props {
  params: { storeId: string };
}

const StoreDashboard: React.FC<Props> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Name: {store?.name}</div>;
};

export default StoreDashboard;
