import * as React from 'react';
import { Suspense } from 'react'
import { getLinks } from './api/index.js'
import CarouselComponent from './projects-theme/carousel-component.js';



const CarouselContent = async ({ cms, data, user }) => {
  console.log(user);
  let events = data;
//   if (cms) {
//     const paginatedEvents = await getEvents()
//     events = paginatedEvents.docs
//   }
//   console.log(events);

  return <CarouselComponent/>;
};

export const GsocProjects = ({ cms, data, user }) => (
  <Suspense>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <CarouselContent
      cms={cms}
      data={data}
      user={user}
    />
  </Suspense>
);
