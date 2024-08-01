import { Editor } from '@/src/components/editor/Editor';
import React from 'react';
import { Header } from '@/components/Header';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


const Document = () => {
  return (
    <>
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
        <SignedIn>
            <UserButton />
          </SignedIn>
          
        </div>
      </Header>
      <Editor />
      
    </>
  );
};

export default Document;
