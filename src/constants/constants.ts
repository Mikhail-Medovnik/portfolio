export type TProjectPlaceholder = "cms";

export interface IProject {
  id: number;
  title: string;
  description: string;
  image?: string;
  placeholder?: TProjectPlaceholder;
  tags: string[];
  source?: string;
  visit?: string;
}

export const projects: IProject[] = [
  {
    title: "Stoloto Lottery Games",
    description:
      "Grid-based lottery games built from scratch to strict technical specs for one of Russia's largest gaming platforms. Includes a gesture-driven number selector in the spirit of Android's pattern lock, reused across 5+ game mechanics, and an animation layer tuned for high-load game fields with element freezing and store synchronization.",
    image: "/images/stoloto.jpg",
    visit: "https://www.stoloto.ru/",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Canvas & SVG",
      "Lottie",
      "requestAnimationFrame",
    ],
    id: 0,
  },

  {
    title: "iTero.com — Site Rebuild",
    description:
      "Led the full rebuild of Align's public site for its iTero intraoral scanners. Built the Contentful-driven page system that lets marketers assemble pages without a developer, Salesforce-backed lead forms, and an S3 media pipeline. The rebuilt site served 1.4M views to 650K unique users in its first year post-launch.",
    image: "/images/itero-com.jpg",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "SCSS Modules",
      "Mantine",
      "Contentful",
      "Salesforce API",
    ],
    visit: "https://www.itero.com",
    id: 1,
  },

  {
    title: "Align X-Ray Insights",
    description:
      "Product site for Align's AI-powered dental diagnostics platform, built on the same Next.js and Contentful foundation as iTero.com. I built the request-a-demo funnel end to end — form UX, validation, and a Salesforce integration that routes leads to sales in real time — plus the S3-backed media pipeline for the product's imagery.",
    image: "/images/align-x-ray-insights.jpg",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "SCSS Modules",
      "Mantine",
      "Contentful",
      "Salesforce API",
    ],
    visit: "https://www.alignxrayinsights.com",
    id: 2,
  },

  {
    title: "Internal CMS Platform",
    description:
      "Full-stack internal content platform used by Align's editorial team to manage marketing content across markets and locales. React and React Query on the front end, Node/Express with PostgreSQL and S3 behind it. Rewriting the heaviest content queries cut editor wait time by 60%, with unit and integration test coverage throughout.",
    placeholder: "cms",
    tags: [
      "React",
      "React Query",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS S3",
      "Jest + RTL",
    ],
    id: 3,
  },

  {
    title: "Real Estate Searcher App",
    description:
      "With this app you can easily find rental homes and for-sale properties in Dubai. The app provides advanced property filtering, property details page with an image carousel, and much more. ",
    image: "/images/rent-dubai.png",
    tags: ["React JS", "Next JS", "Chakra UI", "Rest API"],
    source: "https://github.com/gitMike23/real-estate-app_react_next",
    visit: "https://medovnik-real-estate.netlify.app/",
    id: 4,
  },
  {
    title: "Recipes",
    description:
      "With this Web App you can easily find inspiration for your most delicious meal. All you need just select cuisine and/or type a key word for desired dish.",
    image: "/images/recipes.png",
    tags: ["React", "React Routing", "JavaScript", "Rest API"],
    source: "https://github.com/gitMike23/Recipe-app__react",
    visit: "https://frolicking-phoenix-abcebd.netlify.app/",
    id: 5,
  },
  {
    title: "Design conference",
    description:
      "Here is a landing page for design conference! The intuitive layout makes it easy for users to navigate and find exactly what they're looking for, whether it's information on the event schedule, speaker lineup, or registration details. The landing page is optimized for speed, ensuring that the visitors won't have to wait long to access the exciting content you have in store.",
    image: "/images/conference.jpg",
    tags: ["Javascript"],
    source: "https://github.com/gitMike23/Design_conference",
    visit: "https://medovnik-conference.netlify.app/",
    id: 6,
  },

  {
    title: "Color palette",
    description:
      "Whether you're looking for inspiration or need to match an existing color scheme, this app has got you covered. With its intuitive interface and easy-to-use features, you'll be able to create custom color palettes in minutes. This app is adapted for mobile devices, so you don't need to be close to your PC to save the colors. Say hello to a world of endless possibilities with this color palette generator! ",
    image: "/images/colors.png",
    tags: ["Javascript"],
    source: "https://github.com/gitMike23/Color_palette_web_app",
    visit: "https://medovnik-palette.netlify.app/",
    id: 7,
  },
  {
    title: "Photon",
    description:
      "With this application you'll be able to quickly and easily find the perfect image for your project. Whether you need photos for a website, presentation, or social media post, this engine provides a vast selection of high-quality images to choose from.",
    image: "/images/photon.png",
    tags: ["Javascript", "Rest API"],
    source: "https://github.com/gitMike23/Photon",
    visit: "https://medovnik-photon.netlify.app/",
    id: 8,
  },
  {
    title: "Calculator",
    description:
      "This app provides a seamless user experience, with lightning-fast calculations and intuitive interface. With its advanced features, you can perform complex calculations with ease, including addition, subtraction, multiplication, and division.",
    image: "/images/calculator.png",
    tags: ["React js", "useReducer"],
    visit: "https://medovnik-calculator.netlify.app/",
    id: 9,
  },
];

export interface ITimelineEntry {
  year: number;
  text: string;
}

export const TimeLineData: ITimelineEntry[] = [
  {
    year: 2019,
    text: "Started my frontend journey — first sites, first JavaScript",
  },
  {
    year: 2020,
    text: "Joined Auriga as a frontend developer on client projects",
  },
  {
    year: 2021,
    text: "Promoted to Middle in under a year; built a shared component library",
  },
  {
    year: 2022,
    text: "Joined Align Technology and led the full rebuild of itero.com",
  },
  {
    year: 2025,
    text: "Shipped Align X-Ray Insights, Align's AI-powered dental diagnostics site",
  },
  {
    year: 2025,
    text: "Became a Senior Frontend Engineer at Stoloto, building high-load lottery games",
  },
];

export interface IPrivateData {
  linkedIn: string;
  github: string;
  telegram: string;
  email: string;
}

export const privateData: IPrivateData = {
  linkedIn: "https://www.linkedin.com/in/mikhail-medovnik/",
  github: "https://github.com/mikhail-medovnik",
  telegram: "https://t.me/medovnik",
  email: "medovnikfl@gmail.com",
};
