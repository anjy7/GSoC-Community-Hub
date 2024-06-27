// "use client"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Events } from '@anjy7/events-cms';
import {Header} from "@anjy7/navbar-cms"
import Navbar from "./Navbar"
import { Button } from '@/components/ui/button';
import Filter from './filter';
// import { useState } from 'react';
// import configPromise from '@payload-config';
// import { getPayloadHMR } from '@payloadcms/next/utilities';

// export const getEvents = async () => {
//   const payload = await getPayloadHMR({ config: configPromise });

//   const result = await payload.findGlobal({
//     slug: 'header', // required,
//     depth: 2,
//   });

//   return result;
// };

export default async function Home() {
  // const [year, setYear] = useState(2023);
  // const events = await getEvents();
  // console.log('-------', events.navItems);
  return (
    <>
    {/* <Header/> */}
    <Navbar/>
    <div className=''>
    </div>
      <h1 className='text-center text-4xl font-bold text-[#030c1a] md:text-3xl p-4'>
        <span className='text-[#f5455c]'>GSoC Alumni Summit</span>
      </h1>
      <Filter/>
      <Events />
    </>
  );
}
