'use client';

import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import React, { useEffect } from 'react';

const SetupPage = () => {
  const onOpen = useStoreModal((s) => s.onOpen);
  const isOpen = useStoreModal((s) => s.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;
