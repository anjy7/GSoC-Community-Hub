import { Suspense } from 'react'
import { getEvents } from './api/index.js'
import EventsComponent from './events-theme/events-component.js'

const EventsContent = async () => {
    const events = await getEvents()
    return <EventsComponent data={events} />
}

export const Events = ({}) => (
    <Suspense>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <EventsContent/>
        {/* <h1>hiiii</h1> */}
    </Suspense>
)