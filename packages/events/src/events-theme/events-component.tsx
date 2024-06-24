"use client"
import React from 'react'

interface Event {
  speaker: string;
  speakerDescription: string;
  title: string;
  start: string;
  end: string;
  duration: string;
  youtube: string;
}

interface EventsComponentProps {
  data: {
    docs: Event[];
  };
}

const EventsComponent: React.FC<EventsComponentProps> = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex justify-between border-b pb-2 mb-4">
        <button className="text-blue-600 font-semibold">Overview</button>
        <button className="text-blue-600 font-semibold">Sessions</button>
        <button className="text-blue-600 font-semibold">Speakers</button>
      </div>
      <div className="relative grid grid-cols-1 gap-8">
        {data.docs.map((session, index) => (
          <div key={index} className="bg-gray-500 rounded-xl shadow-md overflow-hidden relative">
            <div className="flex items-center space-x-4 p-4">
              {/* <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>
                  {session.speaker
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </AvatarFallback>
              </Avatar> */}
              <div>hi</div>
              <div className="flex-1">
                <h3 className="font-semibold">{session.speaker}</h3>
                <p className="text-sm text-gray-500">{session.speakerDescription}</p>
              </div>
            </div>
            <div className="border-t p-4">
              <h4 className="font-semibold">{session.title}</h4>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-500">
                    {session.start} - {session.end}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-500">{session.duration} min</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <YoutubeIcon className="h-6 w-6 text-red-600" />
                <span className="text-blue-600">{session.youtube}</span>
              </div>
            </div>
            {index !== 0 && (
              <div className="absolute top-0 left-0 h-full w-1 bg-gray-200 transform translate-x-[-50%]" />
            )}
            <div className="absolute top-0 left-0 h-5 w-5 bg-white rounded-full border border-gray-200 transform translate-x-[-50%] -translate-y-[50%]" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventsComponent;

function ClockIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
  
  
  function YoutubeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    )
  }