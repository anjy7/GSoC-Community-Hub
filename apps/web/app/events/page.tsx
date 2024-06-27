
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Events } from "@anjy7/events-cms";

import configPromise from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';

export const getEvents = async () => {
    const payload = await getPayloadHMR({ config: configPromise });

    const result = await payload.findGlobal({
      slug: 'header', // required,
      depth: 2,
    })


    return result;
};

export default async function Home() {
const events = await getEvents();
console.log("-------",events.navItems)
  return (
<>
<h1>GSoC Alumni Summit 2024</h1>

<Events/>
</>


  )
}
