'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import Modal from '@/components/ui/modal';

const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="ABhishe"
      description="abh"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Children
    </Modal>
  );
};

export default StoreModal;
