import React from 'react';
import dynamic from 'next/dynamic';

const ButtonSimple = dynamic(() => import('app2/ButtonSimple'), { ssr: false }); // Works
const ButtonHooks = dynamic(() => import('app2/ButtonHooks'), { ssr: false }); // Doesn't work!

export default function Home() {
  return (
    <div>
      <h1>Next Host Example</h1>
      <ButtonSimple />
      <ButtonHooks />
    </div>
  )
}
