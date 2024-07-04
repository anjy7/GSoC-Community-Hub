import { Suspense } from 'react'
import { getLinks } from './api/index.js'
// import NavigationMenuDemo from './navigation-theme/navigation-component.js'
// import {NavDemo} from './ui/NavDemo.js'
import NavigationBoot from './navigation-theme/navigation-bootstrap.js'


const EventsContent = async ({data, container}) => {
    // const links = await getLinks()
    // console.log("==============",links.navItems)

    return <NavigationBoot data={data} container={container}/>
    // return null;
}

export const NavigationMenuDemo = ({data, container}) => {
  return (
    <Suspense>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <EventsContent container={container} data={data}/>
        {/* <h1>hiiii</h1> */}
    </Suspense>
)}