const navItems = [
  {
    "type": "link",
    "link": "/",
    "label": "home"
  },
  {
    "type": "dropdown",
    "dropdown": [
      {
        "type": "link",
        "link": "/events",
        "label": "GSoC Alumni Summit"
      },
      {
        "type": "link",
        "link": "/events",
        "label": "GSoC Demo Day"
      }
    ],
    "label": "events"
  },
  {
    "type": "dropdown",
    "dropdown": [
      {
        "type": "link",
        "link": "/events",
        "label": "AI Workshop"
      },
      {
        "type": "link",
        "link": "/events",
        "label": "Apps Workshop"
      }
    ],
    "label": "workshop"
  }
];

export default navItems;