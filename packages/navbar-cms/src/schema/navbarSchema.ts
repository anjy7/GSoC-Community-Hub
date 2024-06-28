import type { GlobalConfig } from 'payload'

import link from './link'

export const NavbarSchema: GlobalConfig = {
  slug: 'navbar',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}