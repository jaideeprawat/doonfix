export const services = {
  electrician: {
    id: "electrician",
    label: "Electrician",
    icon: "Zap",
    problems: [
      {
        id: "minor",
        title: "Minor Work",
        hindi: "छोटा काम",
        subtitle: "Small fixes · Quick job",
        examples: [
          "Switch / socket repair",
          "Bulb or tube light issue",
          "Fan regulator problem",
          "Loose wire",
        ],
        price: "₹150 – ₹300",
        accent: "green",
      },
      {
        id: "general",
        title: "General Work",
        hindi: "सामान्य काम",
        subtitle: "Common household electrical jobs",
        examples: [
          "Fan installation",
          "Light fitting",
          "Switchboard replacement",
          "MCB / fuse issue",
        ],
        price: "₹300 – ₹700",
        accent: "yellow",
      },
      {
        id: "major",
        title: "Major Work",
        hindi: "मुख्य कार्य",
        subtitle: "Complex or time-taking work",
        examples: [
          "New wiring",
          "Short circuit issue",
          "Main board repair",
          "Heavy appliance connection",
        ],
        price: "₹700+ (Inspection required)",
        accent: "red",
      },
    ],
  },

  plumber: {
    id: "plumber",
    label: "Plumber",
    icon: "Droplet",
    problems: [
      {
        id: "minor",
        title: "Minor Issue",
        hindi: "छोटी समस्या",
        subtitle: "Quick plumbing fixes",
        examples: [
          "Tap leakage",
          "Pipe joint loose",
          "Flush adjustment",
        ],
        price: "₹150 – ₹300",
        accent: "green",
      },
      {
        id: "general",
        title: "General Work",
        hindi: "सामान्य काम",
        subtitle: "Regular plumbing work",
        examples: [
          "New tap installation",
          "Sink blockage",
          "Flush repair",
        ],
        price: "₹300 – ₹700",
        accent: "yellow",
      },
      {
        id: "major",
        title: "Major Work",
        hindi: "बड़ा काम",
        subtitle: "Heavy or structural plumbing",
        examples: [
          "Pipeline replacement",
          "Bathroom fitting",
          "Water tank connection",
        ],
        price: "₹700+ (Inspection required)",
        accent: "red",
      },
    ],
  },

  ro: {
    id: "ro",
    label: "RO / Water Purifier",
    icon: "Filter",
    problems: [
      {
        id: "service",
        title: "RO Servicing",
        hindi: "सर्विस",
        subtitle: "Routine maintenance",
        examples: [
          "Filter replacement",
          "Membrane cleaning",
          "Water taste issue",
        ],
        price: "₹300 – ₹600",
        accent: "green",
      },
      {
        id: "repair",
        title: "Repair",
        hindi: "मरम्मत",
        subtitle: "Functional issues",
        examples: [
          "Water leakage",
          "Motor not working",
          "Low water flow",
        ],
        price: "₹600+",
        accent: "red",
      },
    ],
  },

  ac: {
    id: "ac",
    label: "AC Repair",
    icon: "Wind",
    problems: [
      {
        id: "service",
        title: "AC Servicing",
        hindi: "सर्विस",
        subtitle: "Routine maintenance",
        examples: [
          "General servicing",
          "Filter cleaning",
          "Gas pressure check",
        ],
        price: "₹400 – ₹700",
        accent: "green",
      },
      {
        id: "repair",
        title: "Repair",
        hindi: "मरम्मत",
        subtitle: "Cooling or electrical issue",
        examples: [
          "AC not cooling",
          "Water leakage",
          "PCB issue",
        ],
        price: "₹700+",
        accent: "red",
      },
    ],
  },

  solar: {
    id: "solar",
    label: "Solar",
    icon: "Sun",
    problems: [
      {
        id: "service",
        title: "Inspection & Cleaning",
        hindi: "जांच और सफाई",
        subtitle: "Performance maintenance",
        examples: [
          "Panel cleaning",
          "Wiring inspection",
          "Efficiency check",
        ],
        price: "₹500 – ₹1,000",
        accent: "green",
      },
      {
        id: "repair",
        title: "Repair",
        hindi: "मरम्मत",
        subtitle: "System issues",
        examples: [
          "Inverter problem",
          "Battery issue",
          "Panel replacement",
        ],
        price: "₹1,000+",
        accent: "red",
      },
    ],
  },

  carpenter: {
    id: "carpenter",
    label: "Carpenter",
    icon: "Hammer",
    problems: [
      {
        id: "minor",
        title: "Minor Work",
        hindi: "छोटा काम",
        subtitle: "Quick fixes",
        examples: [
          "Door hinge fixing",
          "Drawer adjustment",
          "Loose screws",
        ],
        price: "₹200 – ₹400",
        accent: "green",
      },
      {
        id: "general",
        title: "General Work",
        hindi: "सामान्य काम",
        subtitle: "Furniture work",
        examples: [
          "New shelf fitting",
          "Cupboard repair",
          "Bed assembly",
        ],
        price: "₹400 – ₹800",
        accent: "yellow",
      },
      {
        id: "major",
        title: "Major Work",
        hindi: "बड़ा काम",
        subtitle: "Custom or heavy carpentry",
        examples: [
          "Custom furniture",
          "Modular kitchen work",
          "Door installation",
        ],
        price: "₹800+ (Inspection required)",
        accent: "red",
      },
    ],
  },
};
