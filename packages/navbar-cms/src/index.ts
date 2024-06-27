// Export every other component that's part of our default theme (the Twitter theme) as that
// can be useful for anyone that wans to do more deep edits in the default theme.
// export * from './hackernews-theme/components.jsx'
import { CollectionConfig } from 'payload/types';


// import { EventsSchema } from './schema';

// export { EventsSchema };

// import { EventsSchema as EventsSchemaImport } from './schema';



// export const EventsSchema = EventsSchemaImport as CollectionConfig;
export { EventsSchema } from './schema';

import "./styles.css"
export * from './events.js'

export * from "./ui/Navbar";
export * from "./ui/NavDemo";