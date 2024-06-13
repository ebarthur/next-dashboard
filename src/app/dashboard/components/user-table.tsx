'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

type UserProps = {
  id: number;
  name: string;
  email: string;
  username: string;
};

export function UsersTable({ users }: { users: UserProps[] }) {
  return (
    <>
      <form className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Username</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </form>
    </>
  );
}

function UserRow({ user }: { user: UserProps }) {
  const userId = user.id;
  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell className="hidden md:table-cell">{user.email}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>
        <Button
          className="w-full transition ease-out hover:bg-red-700 hover:text-white"
          size="sm"
          variant="outline"
          disabled
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
