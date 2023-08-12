'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import { Modal } from '@/components/ui/modal';

export const StoreModal = () => {
  const modalStore = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={modalStore.isOpen}
      onClose={modalStore.onClose}
    >
      Create Store
    </Modal>
  );
};
