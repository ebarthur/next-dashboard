'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';
import EmailSignIn from './email-sign-in';
import PhoneSignIn from './phone-sign-in';

function SignInForm() {
  function signInWithGoogle() {
    toast.success('Redirecting');
  }

  return (
    <div className="h-full w-full">
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6">
        <div className="w-full">
          <h3>Sign In</h3>
          <p className="mt-2 text-sm text-neutral-600">
            Don&apos;t have an account?{' '}
            <span className="font-semibold text-black dark:text-white">
              <Link href={`/sign-up`} className="hover:underline">
                Sign Up
              </Link>
            </span>
          </p>
        </div>
        <Tabs defaultValue="email" className="my-6 w-full">
          <TabsList className="w-full">
            <TabsTrigger value="email" className="w-full">
              Email
            </TabsTrigger>
            <TabsTrigger value="phone" className="w-full">
              Phone
            </TabsTrigger>
          </TabsList>
          <TabsContent value="email">
            <EmailSignIn />
          </TabsContent>
          <TabsContent value="phone">
            <PhoneSignIn />
          </TabsContent>
        </Tabs>
        <div className="w-full">
          <span className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
            <span className="bg-background relative z-10 px-6">
              <p className="text-sm text-neutral-500">OR</p>
            </span>
          </span>
        </div>
        <div className="mt-6 w-full">
          <Button
            variant={'outline'}
            type="button"
            className="w-full items-center gap-3"
            onClick={signInWithGoogle}
          >
            <FcGoogle />
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
