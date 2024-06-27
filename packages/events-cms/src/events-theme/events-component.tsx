'use client';
import React from 'react';
// import { events as PostType } from "payload/types";


interface EventsComponentProps {
  data: any;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const EventsComponent: React.FC<EventsComponentProps> = ({ data } ) => {
  return (
    <div className='mx-auto max-w-5xl p-4'>
      <div className='mb-4 flex justify-between border-b pb-2'>
        <button className='font-semibold text-blue-600'>Overview</button>
        <button className='font-semibold text-blue-600'>Sessions</button>
        <button className='font-semibold text-blue-600'>Speakers</button>
      </div>
      <div className='relative grid grid-cols-1 gap-8'>
        {data.docs.map((session: any, index: any) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-xl bg-gray-500 shadow-md'
          >
            <div className='flex items-center space-x-4 p-4'>
              <div className='flex-1'>
                <h3 className='font-semibold'>{session.speaker}</h3>
                <p className='text-sm text-gray-500'>{session.speakerDescription}</p>
              </div>
            </div>
            <div className='border-t p-4'>
              <h4 className='font-semibold'>{session.title}</h4>
              <div className='mt-2 flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <ClockIcon className='h-5 w-5 text-gray-500' />
                  <span className='text-gray-500'>
                    {session.start} - {session.end}
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <ClockIcon className='h-5 w-5 text-gray-500' />
                  <span className='text-gray-500'>{session.duration} min</span>
                </div>
              </div>
              <div className='mt-2 flex items-center space-x-2'>
                <YoutubeIcon className='h-6 w-6 text-red-600' />
                <span className='text-blue-600'>{session.youtube}</span>
              </div>
            </div>
            {index !== 0 && (
              <div className='absolute left-0 top-0 h-full w-1 translate-x-[-50%] transform bg-gray-200' />
            )}
            <div className='absolute left-0 top-0 h-5 w-5 -translate-y-[50%] translate-x-[-50%] transform rounded-full border border-gray-200 bg-white' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;

function ClockIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle
        cx='12'
        cy='12'
        r='10'
      />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  );
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' />
      <path d='m10 15 5-3-5-3z' />
    </svg>
  );
}
