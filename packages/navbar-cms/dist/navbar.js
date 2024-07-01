import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { getLinks } from './api/index.js';
import NavigationMenuDemo from './navigation-theme/navigation-component.js';
const EventsContent = async ()=>{
    const links = await getLinks();
    console.log("==============", links.navItems);
    return /*#__PURE__*/ _jsx(NavigationMenuDemo, {
        data: links.navItems
    });
};
export const Navbar = ({})=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(EventsContent, {})
    });
