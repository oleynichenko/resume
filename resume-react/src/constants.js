const experienceItems = [
  {
    year: 2019,
    date: 'experience.be.date',
    company: 'experience.be.company',
    position: 'experience.be.position',
    description: 'experience.be.description',
    link: 'https://www.ua.be-tse.com/',
    tags: ['angular'],
  },
  {
    year: 2016,
    date: 'experience.jbook.date',
    company: 'experience.jbook.company',
    position: 'experience.jbook.position',
    description: 'experience.jbook.description',
    tags: ['angular', 'apis', 'database', 'devops'],
  },
  // {
  //   year: 2020,
  //   date: 'experience.kawunu.date',
  //   company: 'experience.kawunu.company',
  //   position: 'experience.kawunu.position',
  //   description: 'experience.kawunu.description',
  //   link: 'https://www.kawunu.com',
  //   tags: ['angular', 'react', 'apis', 'database'],
  // },
  {
    year: 2021,
    date: 'experience.livee.date',
    company: 'experience.livee.company',
    position: 'experience.livee.position',
    description: 'experience.livee.description',
    link: 'https://www.livee.com/',
    tags: ['react', 'angular', 'apis', 'database', 'devops'],
  },
];

const educationItems = [
  {
    id: 1,
    name: 'Cursor AI: Learn by Building Full-Stack Next.js 15 App',
    year: 2025,
    tag: 'react',
    link: 'https://www.udemy.com/course/cursorai-nextjs/',
  },
  {
    id: 2,
    name: 'Advanced React: Design Patterns and Performance',
    year: 2025,
    tag: 'react',
    link: 'https://www.udemy.com/course/advanced-react',
  },
  {
    id: 3,
    name: 'React Hook Form: The Complete Guide with react',
    year: 2025,
    tag: 'react',
    link: 'https://www.udemy.com/course/react-hook-form-the-complete-guide-with-react-js',
  },
  {
    id: 4,
    name: 'React Native: Advanced Concepts',
    year: 2024,
    tag: 'react',
    link: 'https://www.udemy.com/course/react-native-advanced',
  },
  {
    id: 5,
    name: 'Modern React with Redux',
    year: 2024,
    tag: 'react',
    link: 'https://www.udemy.com/course/react-redux',
  },
  {
    id: 6,
    name: "NestJS: The Complete Developer's Guide",
    year: 2024,
    tag: 'apis',
    link: 'https://www.udemy.com/course/nestjs-the-complete-developers-guide',
  },
  {
    id: 7,
    name: 'React Native - The Practical Guide',
    year: 2023,
    tag: 'react',
    link: 'https://www.udemy.com/course/react-native-the-practical-guide',
  },
  {
    id: 9,
    name: "SQL and PostgreSQL: The Complete Developer's Guide",
    year: 2023,
    tag: 'database',
    link: 'https://www.udemy.com/course/sql-and-postgresql',
  },
  {
    id: 10,
    name: 'GitHub Actions - The Complete Guide',
    year: 2023,
    tag: 'devops',
    link: 'https://www.udemy.com/course/github-actions-the-complete-guide',
  },
  {
    id: 11,
    name: "Microfrontends with React: A Complete Developer's Guide",
    year: 2022,
    tag: 'react',
    link: 'https://www.udemy.com/course/microfrontend-course',
  },
  {
    id: 19,
    name: 'Secure Your ReactJs Applications With Auth0',
    year: 2022,
    tag: 'react',
    link: 'https://www.udemy.com/course/secure-your-reactjs-applications-with-auth0/',
  },
  {
    id: 12,
    name: 'Node JS: Advanced Concepts',
    year: 2022,
    tag: 'apis',
    link: 'https://www.udemy.com/course/advanced-node-for-developers',
  },
  {
    id: 14,
    name: 'Docker & Kubernetes: The Practical Guide',
    year: 2021,
    tag: 'devops',
    link: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide',
  },
  {
    id: 15,
    name: 'The Nuts and Bolts of OAuth 2.0',
    year: 2021,
    tag: 'apis',
    link: 'https://www.udemy.com/course/oauth-2-simplified',
  },
  {
    id: 13,
    name: "MongoDB - The Complete Developer's Guide",
    year: 2020,
    tag: 'database',
    link: 'https://www.udemy.com/course/mongodb-the-complete-developers-guide',
  },
  {
    id: 8,
    name: 'The Complete Node.js Developer Course (3rd Edition)',
    year: 2020,
    tag: 'apis',
    link: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2',
  },
  {
    id: 16,
    name: 'Webpack 5: The Complete Guide For Beginners',
    year: 2020,
    tag: 'devops',
    link: 'https://www.udemy.com/course/webpack-from-beginner-to-advanced',
  },
  {
    id: 17,
    name: 'Progressive Web Apps (PWA) - The Complete Guide',
    year: 2021,
    tag: 'react',
    link: 'https://www.udemy.com/course/progressive-web-app-pwa-the-complete-guide',
  },
  {
    id: 18,
    name: 'React Progressive Web App With Workbox and Webpack',
    year: 2021,
    tag: 'react',
    link: 'https://www.udemy.com/course/react-progressive-web-app-with-workbox-and-webpack-tutorial',
  },
  {
    id: 20,
    name: 'Unit Testing for TypeScript & NodeJs Developers with Jest',
    year: 2019,
    tag: 'apis',
    link: 'https://www.udemy.com/course/unit-testing-typescript-nodejs',
  },
  {
    id: 21,
    name: 'Angular - The Complete Guide',
    year: 2019,
    tag: 'angular',
    link: 'https://www.udemy.com/course/the-complete-guide-to-angular-2',
  },
  {
    id: 22,
    name: 'Angular (Full App) with Angularfire & NgRx',
    year: 2018,
    tag: 'angular',
    link: 'https://www.udemy.com/course/angular-full-app-with-angular-material-angularfire-ngrx/',
  },
  {
    id: 23,
    name: 'Reactive Angular Course (with RxJs)',
    year: 2018,
    tag: 'angular',
    link: 'https://www.udemy.com/course/rxjs-reactive-angular-course',
  },
  {
    id: 25,
    name: 'Angular Testing Masterclass',
    year: 2018,
    tag: 'angular',
    link: 'https://www.udemy.com/course/angular-testing-course',
  },
  {
    id: 24,
    name: 'Angular Deep Dive – Beginner to Advanced',
    year: 2017,
    tag: 'angular',
    link: 'https://www.udemy.com/course/angular-course',
  },
];

const SKILLS = [
  { name: 'React + Redux', level: 10 },
  { name: 'React Native', level: 8 },
  { name: 'Angular + NgRx', level: 7 },
  { name: 'Node JS', level: 7 },
  { name: 'MongoDB', level: 7 },
  { name: 'Postgres', level: 6 },
  { name: 'PHP + SQL', level: 4 },
  { name: 'Docker + Github', level: 8 },
  { name: 'UX/UI', level: 10 },
];

const UPDATE_DATE = '2025-04-10';
const SECTION_HEIGHT = 400;

export { experienceItems, educationItems, SKILLS, UPDATE_DATE, SECTION_HEIGHT };
