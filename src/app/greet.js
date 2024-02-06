'use client'

import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri'

export default function Greet() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    invoke('greet', { name: 'Next.js lates v.0.1.1' })
      .then(result => setGreeting(result))
      .catch(console.error)
  }, [])

  // Necessary because we will have to use Greet as a component later.
  return <div>{greeting}</div>;
}