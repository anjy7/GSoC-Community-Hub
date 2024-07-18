import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Suspense } from 'react';
import CarouselComponent from './demo-day-theme/carousel-component.js';
const CarouselContent = async ({ cms, data, user })=>{
    console.log(user);
    let events = data;
    //   if (cms) {
    //     const paginatedEvents = await getEvents()
    //     events = paginatedEvents.docs
    //   }
    //   console.log(events);
    return /*#__PURE__*/ _jsx(CarouselComponent, {});
};
export const GsocDemoDay = ({ cms, data, user })=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(CarouselContent, {
            cms: cms,
            data: data,
            user: user
        })
    });
