import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { getEvents } from './api/index.js';
import EventsComponent from './events-theme/events-component.js';
const EventsContent = async ()=>{
    const events = await getEvents();
    return /*#__PURE__*/ _jsx(EventsComponent, {
        data: events
    });
};
export const Events = ({})=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(EventsContent, {})
    });
