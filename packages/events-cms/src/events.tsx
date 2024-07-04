import { Suspense } from 'react'
import { getEvents } from './api/index.js'
import EventsComponent from './events-theme/events-boot.js'

const EventsContent = async ({cms,data}) => {
    let events = data
    if(cms){
        events = await getEvents()
        events = events.docs
    }
    console.log(events)
    return <EventsComponent data={events} />
}

export const Events = ({cms,data}) => (
    <Suspense>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <EventsContent cms={cms} data={data}/>
        {/* <h1>hiiii</h1> */}
    </Suspense>
)