import { Suspense } from 'react'
import { getLinks } from './api/index.js'
import NavigationMenuDemo from './navigation-theme/navigation-component.js'

const EventsContent = async () => {
    const links = await getLinks()
    console.log("==============",links.navItems)
    return <NavigationMenuDemo data={links.navItems}/>
}

export const Navbar = ({}) => (
    <Suspense>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <EventsContent/>
        {/* <h1>hiiii</h1> */}
    </Suspense>
)