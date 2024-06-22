export const articles = [
  {
    id: 100000000001,
    title: "Understanding Redux Basics",
    slug: "understanding-redux-basics",
    text: "Redux is a state management library for JavaScript apps. It helps you manage the state of your application by providing a single source of truth and ensuring that state changes are predictable. Redux works with any UI layer, including React and Angular. It encourages writing clean and maintainable code.",
    date: "2024-06-01",
    views: 120,
    likes: 30,
    comments: [
      { name: "John", comment: "Great article!", date: "2024-06-02", replyTo: null, likes: 5 },
      { name: "Jane", comment: "Very helpful, thanks!", date: "2024-06-03", replyTo: "John", likes: 3 }
    ]
  },
  {
    id: 100000000002,
    title: "React vs Angular: A Comparison",
    slug: "react-vs-angular-comparison",
    text: "Both React and Angular are popular frameworks for building web applications. React is a library developed by Facebook, focusing on building UI components, while Angular is a full-fledged framework developed by Google. Choosing between them depends on your project requirements and personal preference. This article dives into their pros and cons.",
    date: "2024-06-02",
    views: 200,
    likes: 45,
    comments: [
      { name: "Alice", comment: "I prefer React.", date: "2024-06-04", replyTo: null, likes: 8 },
      { name: "Bob", comment: "Angular is better!", date: "2024-06-05", replyTo: "Alice", likes: 6 }
    ]
  },
  {
    id: 100000000003,
    title: "JavaScript ES6 Features",
    slug: "javascript-es6-features",
    text: "ES6, also known as ECMAScript 2015, introduced many new features to JavaScript. These include let and const for variable declaration, arrow functions for concise syntax, template literals for easier string manipulation, and destructuring for unpacking values from arrays and objects. This article explores these features with examples.",
    date: "2024-06-03",
    views: 180,
    likes: 40,
    comments: [
      { name: "Charlie", comment: "This is useful.", date: "2024-06-06", replyTo: null, likes: 7 },
      { name: "Dave", comment: "Well explained!", date: "2024-06-07", replyTo: "Charlie", likes: 5 }
    ]
  },
  {
    id: 100000000004,
    title: "Building a Simple To-Do App",
    slug: "building-simple-todo-app",
    text: "To-Do apps are great for learning the basics of web development. In this article, we will build a simple To-Do app using HTML, CSS, and JavaScript. You will learn how to create and style a user interface, manage user input, and handle data storage. By the end, you'll have a functional app.",
    date: "2024-06-04",
    views: 150,
    likes: 35,
    comments: [
      { name: "Eve", comment: "Can't wait to try this.", date: "2024-06-08", replyTo: null, likes: 4 },
      { name: "Frank", comment: "Very clear instructions.", date: "2024-06-09", replyTo: "Eve", likes: 6 }
    ]
  },
  {
    id: 100000000005,
    title: "Introduction to TypeScript",
    slug: "introduction-to-typescript",
    text: "TypeScript is a superset of JavaScript that adds static typing to the language. This means you can catch errors at compile time, rather than runtime. TypeScript also offers better tooling support, including autocompletion and refactoring. This article covers the basics of TypeScript and how to get started with it.",
    date: "2024-06-05",
    views: 210,
    likes: 50,
    comments: [
      { name: "Grace", comment: "TypeScript is awesome.", date: "2024-06-10", replyTo: null, likes: 9 },
      { name: "Hank", comment: "Agreed!", date: "2024-06-11", replyTo: "Grace", likes: 3 }
    ]
  },
  {
    id: 100000000006,
    title: "CSS Grid Layout",
    slug: "css-grid-layout",
    text: "CSS Grid is a powerful layout system available in CSS. It allows you to create complex layouts with ease. Unlike Flexbox, which is one-dimensional, CSS Grid is two-dimensional, meaning you can control both rows and columns. This article explains the basics of CSS Grid and provides practical examples.",
    date: "2024-06-06",
    views: 140,
    likes: 32,
    comments: [
      { name: "Ivy", comment: "Very informative.", date: "2024-06-12", replyTo: null, likes: 7 },
      { name: "Jack", comment: "Thanks for this guide.", date: "2024-06-13", replyTo: "Ivy", likes: 4 }
    ]
  },
  {
    id: 100000000007,
    title: "Understanding Flexbox",
    slug: "understanding-flexbox",
    text: "Flexbox is a layout model that allows you to design complex layouts with ease. It is one-dimensional, meaning it works with either a row or a column at a time. Flexbox is great for distributing space within an item and aligning items. This article covers the basics and provides examples.",
    date: "2024-06-07",
    views: 130,
    likes: 28,
    comments: [
      { name: "Kate", comment: "Flexbox is tricky, thanks!", date: "2024-06-14", replyTo: null, likes: 6 },
      { name: "Leo", comment: "This helps a lot.", date: "2024-06-15", replyTo: "Kate", likes: 4 }
    ]
  },
  {
    id: 100000000008,
    title: "Getting Started with Node.js",
    slug: "getting-started-nodejs",
    text: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to run JavaScript on the server-side. Node.js is known for its non-blocking, event-driven architecture, making it efficient for handling concurrent operations. This article covers the basics of Node.js and how to set up your first server.",
    date: "2024-06-08",
    views: 220,
    likes: 55,
    comments: [
      { name: "Mia", comment: "Node.js is great.", date: "2024-06-16", replyTo: null, likes: 10 },
      { name: "Nick", comment: "Nice introduction.", date: "2024-06-17", replyTo: "Mia", likes: 5 }
    ]
  },
  {
    id: 100000000009,
    title: "Express.js for Beginners",
    slug: "expressjs-for-beginners",
    text: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building web servers. This article will guide you through setting up Express.js, handling routes, and managing middleware.",
    date: "2024-06-09",
    views: 160,
    likes: 37,
    comments: [
      { name: "Olive", comment: "Clear and concise.", date: "2024-06-18", replyTo: null, likes: 8 },
      { name: "Paul", comment: "This is helpful.", date: "2024-06-19", replyTo: "Olive", likes: 3 }
    ]
  },
  {
    id: 100000000010,
    title: "Building REST APIs",
    slug: "building-rest-apis",
    text: "REST APIs are essential for modern web development. They allow different software systems to communicate with each other. This article covers the basics of REST, including how to create, read, update, and delete resources. You will learn how to build a simple REST API using Express.js.",
    date: "2024-06-10",
    views: 190,
    likes: 45,
    comments: [
      { name: "Quinn", comment: "REST APIs made easy.", date: "2024-06-20", replyTo: null, likes: 7 },
      { name: "Rick", comment: "Good explanations.", date: "2024-06-21", replyTo: "Quinn", likes: 5 }
    ]
  },
  {
    id: 100000000011,
    title: "Vue.js Introduction",
    slug: "vuejs-introduction",
    text: "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning you can use as much or as little of it as you need. Vue.js focuses on the view layer, making it easy to integrate with other libraries or projects. This article covers the basics of Vue.js.",
    date: "2024-06-11",
    views: 175,
    likes: 42,
    comments: [
      { name: "Sam", comment: "Vue.js is fun to learn.", date: "2024-06-22", replyTo: null, likes: 6 },
      { name: "Tina", comment: "Great intro!", date: "2024-06-23", replyTo: "Sam", likes: 4 }
    ]
  },
  {
    id: 100000000012,
    title: "Setting Up Webpack",
    slug: "setting-up-webpack",
    text: "Webpack is a powerful module bundler for JavaScript applications. It takes modules with dependencies and generates static assets representing those modules. Webpack can be used to bundle, transform, and manage assets. This article guides you through setting up Webpack for your project and explains its core concepts.",
    date: "2024-06-12",
    views: 145,
    likes: 33,
    comments: [
      { name: "Uma", comment: "Webpack setup is tricky.", date: "2024-06-24", replyTo: null, likes: 6 },
      { name: "Vince", comment: "Thanks for this guide.", date: "2024-06-25", replyTo: "Uma", likes: 4 }
    ]
  },
  {
    id: 100000000013,
    title: "Introduction to MongoDB",
    slug: "introduction-to-mongodb",
    text: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. This allows for easy scalability and performance. MongoDB is used for its ability to handle large volumes of data with high availability. This article covers the basics of MongoDB, including how to set up a database and perform CRUD operations.",
    date: "2024-06-13",
    views: 200,
    likes: 48,
    comments: [
      { name: "Will", comment: "MongoDB is powerful.", date: "2024-06-26", replyTo: null, likes: 9 },
      { name: "Xena", comment: "Great intro!", date: "2024-06-27", replyTo: "Will", likes: 5 }
    ]
  },
  {
    id: 100000000014,
    title: "Creating a React App",
    slug: "creating-react-app",
    text: "React is a popular JavaScript library for building user interfaces, particularly single-page applications. React allows you to create reusable UI components. This article walks you through setting up a new React app using Create React App, building components, and managing state. By the end, you'll have a working React application.",
    date: "2024-06-14",
    views: 185,
    likes: 44,
    comments: [
      { name: "Yara", comment: "React is amazing.", date: "2024-06-28", replyTo: null, likes: 8 },
      { name: "Zane", comment: "Very detailed.", date: "2024-06-29", replyTo: "Yara", likes: 6 }
    ]
  },
  {
    id: 100000000015,
    title: "Understanding Promises in JavaScript",
    slug: "understanding-promises-javascript",
    text: "Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never. Promises simplify code by avoiding the need for deeply nested callbacks. This article explains the concept of promises, how to create them, and how to use them effectively in your code.",
    date: "2024-06-15",
    views: 175,
    likes: 41,
    comments: [
      { name: "Abby", comment: "Promises are tricky.", date: "2024-06-30", replyTo: null, likes: 7 },
      { name: "Ben", comment: "Great explanation.", date: "2024-07-01", replyTo: "Abby", likes: 5 }
    ]
  },
  {
    id: 100000000016,
    title: "Async/Await in JavaScript",
    slug: "async-await-javascript",
    text: "Async/Await is a syntactic sugar for handling asynchronous operations in JavaScript. It allows you to write asynchronous code that looks synchronous, making it easier to read and maintain. This article covers the basics of async/await, how to use it with promises, and provides practical examples to get you started.",
    date: "2024-06-16",
    views: 160,
    likes: 38,
    comments: [
      { name: "Cara", comment: "Async/Await is awesome.", date: "2024-07-02", replyTo: null, likes: 8 },
      { name: "Dan", comment: "Very helpful.", date: "2024-07-03", replyTo: "Cara", likes: 4 }
    ]
  },
  {
    id: 100000000017,
    title: "Introduction to Git and GitHub",
    slug: "introduction-git-github",
    text: "Git is a version control system that allows you to track changes to your codebase. GitHub is a platform for hosting and collaborating on Git repositories. This article covers the basics of Git, including how to initialize a repository, commit changes, and manage branches. It also explains how to use GitHub for version control and collaboration.",
    date: "2024-06-17",
    views: 210,
    likes: 50,
    comments: [
      { name: "Eli", comment: "Git is essential.", date: "2024-07-04", replyTo: null, likes: 10 },
      { name: "Finn", comment: "Thanks for the tips.", date: "2024-07-05", replyTo: "Eli", likes: 5 }
    ]
  },
  {
    id: 100000000018,
    title: "Introduction to SASS",
    slug: "introduction-to-sass",
    text: "SASS is a CSS preprocessor that adds power and elegance to the basic language. It allows you to use variables, nested rules, mixins, functions, and more, making your CSS more maintainable and extendable. This article covers the basics of SASS, how to set it up, and how to use its features to streamline your CSS development.",
    date: "2024-06-18",
    views: 145,
    likes: 34,
    comments: [
      { name: "Gina", comment: "SASS is great.", date: "2024-07-06", replyTo: null, likes: 6 },
      { name: "Harry", comment: "Nice tutorial.", date: "2024-07-07", replyTo: "Gina", likes: 4 }
    ]
  },
  {
    id: 100000000019,
    title: "Responsive Design with Media Queries",
    slug: "responsive-design-media-queries",
    text: "Media queries are used in CSS to apply different styles based on the size of the viewport or device characteristics. They are essential for creating responsive designs that work on all screen sizes. This article explains how to use media queries, provides practical examples, and discusses best practices for responsive design.",
    date: "2024-06-19",
    views: 180,
    likes: 42,
    comments: [
      { name: "Ivy", comment: "Responsive design is crucial.", date: "2024-07-08", replyTo: null, likes: 8 },
      { name: "Jack", comment: "Very useful tips.", date: "2024-07-09", replyTo: "Ivy", likes: 5 }
    ]
  },
  {
    id: 100000000020,
    title: "Introduction to GraphQL",
    slug: "introduction-to-graphql",
    text: "GraphQL is a query language for APIs and a runtime for executing those queries. It allows you to request exactly the data you need, making it more efficient than REST. This article covers the basics of GraphQL, including how to set up a GraphQL server, define schemas, and write queries. You'll also learn about the benefits of using GraphQL.",
    date: "2024-06-20",
    views: 195,
    likes: 47,
    comments: [
      { name: "Kara", comment: "GraphQL is powerful.", date: "2024-07-10", replyTo: null, likes: 9 },
      { name: "Liam", comment: "Thanks for this intro.", date: "2024-07-11", replyTo: "Kara", likes: 6 }
    ]
  },
  {
    id: 100000000021,
    title: "Introduction to Docker",
    slug: "introduction-to-docker",
    text: "Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and consistent across different environments. This article covers the basics of Docker, including how to set up Docker on your system, create Docker images, and manage containers. You'll also learn about the benefits of using Docker for development and deployment.",
    date: "2024-06-21",
    views: 205,
    likes: 49,
    comments: [
      { name: "Mona", comment: "Docker is amazing.", date: "2024-07-12", replyTo: null, likes: 10 },
      { name: "Nate", comment: "Great introduction.", date: "2024-07-13", replyTo: "Mona", likes: 5 }
    ]
  }
];
