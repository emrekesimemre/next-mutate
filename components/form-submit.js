'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

const FormSubmit = () => {
  const status = useFormStatus();

  if (status.pending) {
    return <button>Creating Post</button>;
  }
  return (
    <>
      <button type="reset">Reset</button>
      <button>
        Create Post
      </button>
    </>
  );
};

export default FormSubmit;
