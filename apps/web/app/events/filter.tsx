"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Filter() {
    const [year, setYear] = useState(2023);
  return (
    <>
        <div className=''>
      <Button>2023</Button>
      <Button>2022</Button>
      <Button>2021</Button>
    </div>
    </>
  );
}
