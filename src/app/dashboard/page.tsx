import React from 'react';
import { UsersTable } from '@/app/dashboard/components/user-table';
import { Users } from '@/data';
import { ScrollArea } from '@/components/ui/scroll-area';

const Page = () => {
  return (
    <div>
      <ScrollArea className="h-[95vh]">
        <UsersTable users={Users} />
      </ScrollArea>
    </div>
  );
};

export default Page;
