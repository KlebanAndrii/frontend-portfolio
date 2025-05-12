import type { FormField } from "@/types/practical";
import { SiBinance, SiBitcoin, SiDogecoin, SiEthereum, SiRipple } from "react-icons/si";

// components/practical/EmployeeValidationForm.tsx
export const formFields: FormField[] = [
  { label: "Name", name: "name", type: "text", placeholder: "Name" },
  { label: "Email", name: "email", type: "email", placeholder: "Email" },
  {
    label: "Employee ID",
    name: "employeeId",
    type: "text",
    placeholder: "Employee ID",
  },
  {
    label: "Joining Date",
    name: "joiningDate",
    type: "date",
    placeholder: "Joining Date",
  },
];

// components/practical/WordOmitter.tsx
export const omittedWords = ["a", "the", "and", "or", "but"];

// components/practical/QualityVoting.tsx
export const aspects = ["Readability", "Performance", "Security"];

// components/practical/ArticlesList.tsx
export const articlesData = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];

// components/practical/Slides.tsx
export const sampleSlides = [
  // FRONTEND
  {
    title: "HTML Basics",
    text: "HTML is the standard markup language for creating web pages. It provides the structure of a webpage using elements like <div>, <h1>, <p>, and <a>.",
  },
  {
    title: "CSS Fundamentals",
    text: "CSS is used to style HTML elements. It supports selectors, properties, media queries, and layout techniques such as Flexbox and Grid.",
  },
  {
    title: "JavaScript Essentials",
    text: "JavaScript is a scripting language used to create dynamic content. Core concepts include variables, functions, objects, arrays, and DOM manipulation.",
  },
  {
    title: "DOM Manipulation",
    text: "The DOM represents the structure of a webpage. JavaScript can access and manipulate DOM elements using methods like getElementById and querySelector.",
  },
  {
    title: "ES6+ Features",
    text: "Modern JavaScript includes features like arrow functions, destructuring, template literals, promises, async/await, and modules.",
  },
  {
    title: "React State & Props",
    text: "State represents data that can change over time. Props are used to pass data from parent to child components in React.",
  },
  {
    title: "React Lifecycle",
    text: "Lifecycle methods in class components and hooks like useEffect in functional components allow you to control component behavior during its lifecycle.",
  },
  {
    title: "React Router",
    text: "React Router enables client-side routing in single-page applications (SPA). It uses components like <Route>, <Link>, and <Outlet>.",
  },
  {
    title: "React Hooks",
    text: "Hooks like useState, useEffect, useContext, and useRef let you manage state and side effects in functional components.",
  },

  // BACKEND
  {
    title: "Node.js Overview",
    text: "Node.js is a JavaScript runtime built on Chrome’s V8 engine, enabling JavaScript to run on the server.",
  },
  {
    title: "Express.js Basics",
    text: "Express.js is a web framework for Node.js. It simplifies routing, middleware integration, and API creation.",
  },
  {
    title: "Middleware in Express",
    text: "Middleware functions in Express can modify the request and response objects or end the request-response cycle.",
  },
  {
    title: "RESTful API Design",
    text: "REST APIs follow principles like statelessness, resource-based endpoints, and use of HTTP methods (GET, POST, PUT, DELETE).",
  },

  // DATABASES
  {
    title: "MongoDB Fundamentals",
    text: "MongoDB is a NoSQL database that stores data in JSON-like documents. It's schema-less and supports flexible data models.",
  },
  {
    title: "Mongoose ODM",
    text: "Mongoose is an ODM for MongoDB in Node.js. It provides schema definitions and validation for MongoDB collections.",
  },
  {
    title: "SQL vs NoSQL",
    text: "SQL databases use structured schemas and relational tables. NoSQL databases offer flexible schemas and support documents, key-value, and graph models.",
  },

  // AUTHENTICATION & SECURITY
  {
    title: "User Authentication",
    text: "Authentication verifies user identity. It can be implemented using sessions, tokens (JWT), OAuth, and more.",
  },
  {
    title: "JWT (JSON Web Tokens)",
    text: "JWT is a compact, URL-safe way to transmit claims between parties. It's often used for stateless authentication in APIs.",
  },
  {
    title: "Password Hashing",
    text: "To securely store passwords, hash them using algorithms like bcrypt before saving them to the database.",
  },

  // DEVOPS / DEPLOYMENT
  {
    title: "Git & Version Control",
    text: "Git is a distributed version control system. It allows collaboration, branching, and history tracking of codebases.",
  },
  {
    title: "GitHub & Remote Repos",
    text: "GitHub hosts remote repositories for collaboration and CI/CD integrations. Commands like git push/pull interact with it.",
  },
  {
    title: "Environment Variables",
    text: "Environment variables store configuration outside the codebase (e.g., API keys, DB connection strings) and are accessed via process.env.",
  },
  {
    title: "Netlify & Vercel",
    text: "Netlify and Vercel offer CI/CD, serverless functions, and easy deployment for frontend apps with Git integration.",
  },
  {
    title: "Heroku & Railway",
    text: "Heroku and Railway support backend deployments with databases, environment configs, and CI/CD pipelines.",
  },

  // TOOLS & BUILDING
  {
    title: "NPM & Package.json",
    text: "NPM manages JavaScript packages. package.json keeps track of dependencies, scripts, and metadata about the project.",
  },
  {
    title: "Webpack & Bundlers",
    text: "Bundlers like Webpack, Vite, and Parcel optimize and bundle JS, CSS, and assets for production.",
  },
  {
    title: "Babel",
    text: "Babel is a JavaScript compiler that converts modern JavaScript into a backwards-compatible version for older browsers.",
  },
  {
    title: "Linters & Formatters",
    text: "Tools like ESLint and Prettier enforce code quality and consistent formatting across the codebase.",
  },
];

// components/practical/MedicalRecords/Records.tsx and Search.tsx
export const medicalUsers = [
  {
    id: "1",
    data: [
      {
        id: 6,
        timestamp: 1568550058964,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 155,
          bloodPressureSystole: 90,
          pulse: 130,
          breathingRate: 29,
          bodyTemperature: 99.2,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 173,
        },
      },
      {
        id: 7,
        timestamp: 1564691138999,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 147,
          bloodPressureSystole: 100,
          pulse: 138,
          breathingRate: 25,
          bodyTemperature: 100,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 196,
        },
      },
      {
        id: 8,
        timestamp: 1562157191823,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 122,
          bloodPressureSystole: 77,
          pulse: 91,
          breathingRate: 20,
          bodyTemperature: 101.5,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 175,
        },
      },
      {
        id: 13,
        timestamp: 1551906996274,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 121,
          bloodPressureSystole: 80,
          pulse: 91,
          breathingRate: 18,
          bodyTemperature: 101.3,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 180,
        },
      },
      {
        id: 15,
        timestamp: 1551566179628,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 136,
          bloodPressureSystole: 88,
          pulse: 112,
          breathingRate: 25,
          bodyTemperature: 99.3,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 192,
        },
      },
      {
        id: 22,
        timestamp: 1563243111785,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 139,
          bloodPressureSystole: 82,
          pulse: 105,
          breathingRate: 28,
          bodyTemperature: 97.1,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 196,
        },
      },
      {
        id: 24,
        timestamp: 1563805161434,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 144,
          bloodPressureSystole: 92,
          pulse: 137,
          breathingRate: 34,
          bodyTemperature: 102.5,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 191,
        },
      },
      {
        id: 30,
        timestamp: 1549051080085,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 130,
          bloodPressureSystole: 82,
          pulse: 114,
          breathingRate: 23,
          bodyTemperature: 98.6,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 188,
        },
      },
      {
        id: 33,
        timestamp: 1552027463340,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 133,
          bloodPressureSystole: 83,
          pulse: 126,
          breathingRate: 19,
          bodyTemperature: 99.7,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 185,
        },
      },
      {
        id: 41,
        timestamp: 1546789224456,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 151,
          bloodPressureSystole: 96,
          pulse: 130,
          breathingRate: 26,
          bodyTemperature: 103,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 1,
        userName: "John Oliver",
        userDob: "02-01-1986",
        meta: {
          height: 168,
          weight: 174,
        },
      },
    ],
  },
  {
    id: "2",
    data: [
      {
        id: 1,
        timestamp: 1565637002408,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 154,
          bloodPressureSystole: 91,
          pulse: 125,
          breathingRate: 32,
          bodyTemperature: 100,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 172,
        },
      },
      {
        id: 2,
        timestamp: 1562539731129,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 139,
          bloodPressureSystole: 81,
          pulse: 104,
          breathingRate: 20,
          bodyTemperature: 99.4,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 171,
        },
      },
      {
        id: 3,
        timestamp: 1563465027370,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 125,
          bloodPressureSystole: 76,
          pulse: 113,
          breathingRate: 22,
          bodyTemperature: 100.8,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 185,
        },
      },
      {
        id: 16,
        timestamp: 1568085122164,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 136,
          bloodPressureSystole: 85,
          pulse: 117,
          breathingRate: 29,
          bodyTemperature: 99.9,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 186,
        },
      },
      {
        id: 17,
        timestamp: 1547084560364,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 129,
          bloodPressureSystole: 79,
          pulse: 102,
          breathingRate: 16,
          bodyTemperature: 103.4,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 185,
        },
      },
      {
        id: 20,
        timestamp: 1549184918171,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 145,
          bloodPressureSystole: 94,
          pulse: 125,
          breathingRate: 25,
          bodyTemperature: 102.6,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 181,
        },
      },
      {
        id: 26,
        timestamp: 1564765981840,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 144,
          bloodPressureSystole: 90,
          pulse: 135,
          breathingRate: 28,
          bodyTemperature: 99.2,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 178,
        },
      },
      {
        id: 31,
        timestamp: 1555004832077,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 154,
          bloodPressureSystole: 90,
          pulse: 138,
          breathingRate: 26,
          bodyTemperature: 102.9,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 178,
        },
      },
      {
        id: 32,
        timestamp: 1554074088481,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 135,
          bloodPressureSystole: 82,
          pulse: 119,
          breathingRate: 29,
          bodyTemperature: 97.8,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 183,
        },
      },
      {
        id: 35,
        timestamp: 1560628606015,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 151,
          bloodPressureSystole: 98,
          pulse: 140,
          breathingRate: 27,
          bodyTemperature: 100.7,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 2,
        userName: "Bob Martin",
        userDob: "14-09-1989",
        meta: {
          height: 174,
          weight: 186,
        },
      },
    ],
  },
  {
    id: "3",
    data: [
      {
        id: 9,
        timestamp: 1548036340751,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 147,
          bloodPressureSystole: 96,
          pulse: 130,
          breathingRate: 28,
          bodyTemperature: 101,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 106,
        },
      },
      {
        id: 10,
        timestamp: 1562161672195,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 127,
          bloodPressureSystole: 78,
          pulse: 130,
          breathingRate: 22,
          bodyTemperature: 103.8,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 110,
        },
      },
      {
        id: 11,
        timestamp: 1563846626267,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 126,
          bloodPressureSystole: 75,
          pulse: 99,
          breathingRate: 22,
          bodyTemperature: 101.9,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 108,
        },
      },
      {
        id: 18,
        timestamp: 1560177927736,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 141,
          bloodPressureSystole: 96,
          pulse: 123,
          breathingRate: 29,
          bodyTemperature: 99,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 103,
        },
      },
      {
        id: 25,
        timestamp: 1551539005307,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 154,
          bloodPressureSystole: 90,
          pulse: 131,
          breathingRate: 22,
          bodyTemperature: 103,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 107,
        },
      },
      {
        id: 27,
        timestamp: 1556836728887,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 133,
          bloodPressureSystole: 84,
          pulse: 124,
          breathingRate: 26,
          bodyTemperature: 99.2,
        },
        doctor: {
          id: 2,
          name: "Dr Arnold Bullock",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 109,
        },
      },
      {
        id: 29,
        timestamp: 1551436887626,
        diagnosis: {
          id: 2,
          name: "Common Cold",
          severity: 1,
        },
        vitals: {
          bloodPressureDiastole: 124,
          bloodPressureSystole: 80,
          pulse: 129,
          breathingRate: 21,
          bodyTemperature: 102.3,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 107,
        },
      },
      {
        id: 34,
        timestamp: 1553964012428,
        diagnosis: {
          id: 3,
          name: "Pulmonary embolism",
          severity: 4,
        },
        vitals: {
          bloodPressureDiastole: 151,
          bloodPressureSystole: 95,
          pulse: 126,
          breathingRate: 29,
          bodyTemperature: 102.9,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 102,
        },
      },
      {
        id: 42,
        timestamp: 1551568255913,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 133,
          bloodPressureSystole: 86,
          pulse: 115,
          breathingRate: 26,
          bodyTemperature: 97.7,
        },
        doctor: {
          id: 3,
          name: "Dr Pilar Cristancho",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 110,
        },
      },
      {
        id: 47,
        timestamp: 1568317109556,
        diagnosis: {
          id: 4,
          name: "Pleurisy",
          severity: 3,
        },
        vitals: {
          bloodPressureDiastole: 139,
          bloodPressureSystole: 83,
          pulse: 124,
          breathingRate: 26,
          bodyTemperature: 99.7,
        },
        doctor: {
          id: 4,
          name: "Dr Allysa Ellis",
        },
        userId: 3,
        userName: "Helena Fernandez",
        userDob: "23-12-1987",
        meta: {
          height: 157,
          weight: 104,
        },
      },
    ],
  },
];

// components/practical/CryptoRank/Table.tsx
export const cryptocurrencyList = [
  {
    code: "BNB",
    name: "BNB",
    rate: 0.00311839,
    icon: SiBinance,
    description:
      "BNB is the native cryptocurrency of the Binance exchange, used for trading fee discounts and other utilities.",
  },
  {
    code: "BTC",
    name: "Bitcoin",
    rate: 0.00004066,
    icon: SiBitcoin,
    description:
      "Bitcoin is the first and most well-known cryptocurrency, created in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto.",
  },
  {
    code: "DOGE",
    name: "Dogecoin",
    rate: 11.18558722,
    icon: SiDogecoin,
    description:
      "Dogecoin is a cryptocurrency that started as a joke but has gained popularity due to its active community and charitable initiatives.",
  },
  {
    code: "ETH",
    name: "Ethereum",
    rate: 0.00059237,
    icon: SiEthereum,
    description:
      "Ethereum is a decentralized platform that enables developers to build and deploy smart contracts and decentralized applications (dApps).",
  },
  {
    code: "XRP",
    name: "XRP",
    rate: 2.50682634,
    icon: SiRipple,
    description:
      "XRP is a digital asset designed for fast and low-cost international money transfers, primarily used by financial institutions.",
  },
];