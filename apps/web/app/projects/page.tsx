// "use client"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { GsocProjects } from '@anjy7/gsoc-projects';
import {NavigationMenuDemo} from "@anjy7/navbar-cms"
import navItems from "@lib/navigation"
import events from '@lib/events';
import user from '@lib/superprofile'
export default async function Home() {


  return (
    <>
    <NavigationMenuDemo container={{}} data={navItems}/>
    <div className=''>
    </div>
      <h1 className='text-center text-4xl font-bold text-[#030c1a] md:text-3xl p-4'>
        <span className='text-[#f5455c]'>Google Summer of Code Projects</span>
      </h1>
      <h1 className='text-center text-xl md:text-xl text-gray-500 p-4'>
        <span >All of the projects are open source projects welcoming additional contributors. Please click on links below and start contributing!</span>
      </h1>
      {/* <Events cms={false} data={events} user={user}/> */}
    </>
  );
}
