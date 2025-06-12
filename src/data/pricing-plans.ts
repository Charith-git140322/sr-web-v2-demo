// @/data/pricingData.ts

export const PRICING_PLANS = [
  {
    name: "Free",
    price: 0,
    enrolments: "Up to 10",
    maxCourses: "1",
    tableColor: "bg-gray-200",
    storage: {
      youtube: true,
      googleDrive: false,
      streamable: false,
      dropbox: false,
    },
  },
  {
    name: "Basic",
    price: 5750,
    enrolments: "Up to 150",
    maxCourses: "3",
    tableColor: "bg-amber-100",
    storage: {
      youtube: true,
      googleDrive: true,
      streamable: true,
      dropbox: true,
    },
  },
  {
    name: "Pro",
    price: 11500,
    enrolments: "Up to 500",
    maxCourses: "5",
    tableColor: "bg-amber-100",
    storage: {
      youtube: true,
      googleDrive: true,
      streamable: true,
      dropbox: true,
    },
  },
  {
    name: "Business",
    price: 17000,
    enrolments: "Up to 1000",
    maxCourses: "10",
    tableColor: "bg-amber-100",
    storage: {
      youtube: true,
      googleDrive: true,
      streamable: true,
      dropbox: true,
    },
  },
];

export const ADD_ONS = [
  {
    title: "Live class 100 students",
    price: "LKR 3,500/monthly",
    description: "With 5 GB of free recording",
  },
  {
    title: "Live class 300 students",
    price: "LKR 6,500/monthly",
    description: "With 5 GB of free recording",
  },
  {
    title: "Live class 500 students",
    price: "LKR 15,000/monthly",
    description: "With 5 GB of free recording",
  },
  {
    title: "Extra recording",
    price: "LKR 300/1 GB",
    description: "LKR 300 Per GB exceeding the free 5 GB of recording",
  },
  {
    title: "IPG",
    price: "Extra 10%",
    description: "10% extra on every transaction regardless of sub plan",
  },
  {
    title: "Dedicated storage (streamable)",
    price: "LKR 5,000/monthly",
    description: "500 GB of dedicated storage in streamable",
  },
  {
    title: "Dedicated storage (google drive)",
    price: "LKR 500/monthly",
    description: "100 GB of dedicated storage in google drive",
  },
  {
    title: "Dedicated storage (drop box)",
    price: "LKR 3,500/monthly",
    description: "100 GB of dedicated storage in drop box",
  },
  {
    title: "Data transfer to any storage",
    price: "LKR 1,500/10 GB",
    description:
      "To transfer 10 GB of data to any storage only costs LKR 1,500",
  },
  {
    title: "Additional course slot",
    price: "LKR 2,500/monthly",
    description: "An additional course slot just for LKR 2,500 per month",
  },
  {
    title: "Additional 20 students package",
    price: "LKR 2,500/monthly",
    description: "Additional 20 students package just for LKR 2,500 per month",
  },
  {
    title: "Student coordinator",
    price: null,
    description: "",
  },
  {
    title: "Designing and marketing",
    price: null,
    description: "",
  },
  {
    title: "Live class monitoring",
    price: null,
    description: "",
  },
  {
    title: "Q bank",
    price: null,
    description: "",
  },
];
