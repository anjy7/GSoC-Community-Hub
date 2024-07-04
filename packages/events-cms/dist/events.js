import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { getEvents } from './api/index.js';
import EventsComponent from './events-theme/events-boot.js';
const EventsContent = async ({ cms, data })=>{
    let events = data;
    if (cms) {
        events = await getEvents();
        events = events.docs;
    }
    console.log(events);
    return /*#__PURE__*/ _jsx(EventsComponent, {
        data: events
    });
};
export const Events = ({ cms, data })=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(EventsContent, {
            cms: cms,
            data: data
        })
    });
