import Header from '@/components/Header';
import { Editor } from '@/src/components/editor/Editor';
import React from 'react';

const Document = () => {
  return (
    <>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className='document-title'>This is a fake doc</p>
        </div>
      </Header>
      <Editor />
    </>
  );
};

export default Document;
