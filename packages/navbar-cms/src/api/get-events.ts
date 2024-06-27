import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@payload-config';

export const getEvents = async () => {
    const payload = await getPayloadHMR({ config: configPromise });

    const data = await payload.findGlobal({
      slug: 'header', 
      depth: 2,
    });
  

    return data;
};
