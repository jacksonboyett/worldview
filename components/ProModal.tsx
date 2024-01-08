'use client';

import { useProModal } from '@/hooks/use-pro-modal';
import {
  Check,
  Code,
  FileText,
  ImageIcon,
  MessageSquare,
  Music,
  Video,
  Zap,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import axios from 'axios';
import { useState } from 'react';
import { useToast } from './ui/use-toast';

const tools = [
  {
    label: 'Converstation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
  },
  {
    label: 'Video Generation',
    icon: Video,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
];

function ProModal() {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const reponse = await axios.get('/api/stripe');
      window.location.href = reponse.data.url;
    } catch (error) {
      toast({
        title: 'Sorry!',
        description: 'There was an error. Please click the chat button in the bottom right for support!',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="w-96 h-72">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Worldview
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <Card className="p-2 border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <div className="p-2 w-fit rounded-md">
                <FileText className="h-6n w-6" />
              </div>
              <div className="font-semibold text-sm">Unlimited AI Generated Reports</div>
            </div>
            <Check className="text-primary w-5 h-5" />
          </Card>
					<Card className="p-2 border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <div className="p-2 w-fit rounded-md">
                <FileText className="h-6n w-6" />
              </div>
              <div className="font-semibold text-sm">Unlimited Saved Charts</div>
            </div>
            <Check className="text-primary w-5 h-5" />
          </Card>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            className="w-full"
            variant="premium"
            size="lg">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ProModal;
