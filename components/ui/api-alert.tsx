'use client';

import { Copy, Server } from 'lucide-react';
import { toast } from 'react-hot-toast';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Props {
  title: string;
  description: string;
  variant: 'Public' | 'Admin';
}

const ApiAlert: React.FC<Props> = ({ title, description, variant }) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success('API route copied to the clipboard');
  };
  return (
    <Alert>
      <Server className="h-4 w-4 mt-[3px]" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
        <Badge variant={variant === 'Admin' ? 'destructive' : 'secondary'}>
          {variant}
        </Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant="outline" size="sm" onClick={onCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default ApiAlert;
