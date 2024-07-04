import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
// import NavigationMenuDemo from './navigation-theme/navigation-component.js'
// import {NavDemo} from './ui/NavDemo.js'
import NavigationBoot from './navigation-theme/navigation-bootstrap.js';
const EventsContent = async ({ data, container })=>{
    // const links = await getLinks()
    // console.log("==============",links.navItems)
    return /*#__PURE__*/ _jsx(NavigationBoot, {
        data: data,
        container: container
    });
// return null;
};
export const NavigationMenuDemo = ({ data, container })=>{
    return /*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(EventsContent, {
            container: container,
            data: data
        })
    });
};
