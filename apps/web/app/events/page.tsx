// "use client"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Events } from '@anjy7/events-cms';
import {NavigationMenuDemo} from "@anjy7/navbar-cms"
import Filter from './filter';
import navItems from "@lib/navigation"
import events from '@lib/events';
export default async function Home() {


  return (
    <>
    <NavigationMenuDemo container={{}} data={navItems}/>
    <div className=''>
    </div>
      <h1 className='text-center text-4xl font-bold text-[#030c1a] md:text-3xl p-4'>
        <span className='text-[#f5455c]'>GSoC Alumni Summit</span>
      </h1>
      <Filter/>
      <Events cms={true} data={events}/>
    </>
  );
}
