import { Dictionary } from "../types";

const dictionary: Dictionary = {
  "key-not-found": "Translation not found",
  navigation: "Navigation",
  "navigation-home": "Home",
  "navigation-docs": "Docs",
  "navigation-blog": "Blog",
  "navigation-about": "About",
  "hero-links-why-moon-lake": "Why Moon Lake?",
  "hero-links-get-started": "Get Started",
  "hero-phrases-blazingly-fast-dynamic": "Blazingly Fast Dynamic",
  "hero-phrases-progressive-adaptive-edge": "Progressive Adaptive Edge",
  "hero-phrases-front-end-powerhouse": "Frontend Powerhouse",
  "home-features-1": "Adaptable",
  "home-features-1-body":
    "Elevate your projects with a framework that boasts unparalleled adaptability, effortlessly accommodating diverse requirements and scaling with your ambitions.",
  "home-features-2": "Performant",
  "home-features-2-body":
    "Efficiently streamline your development process with a framework that prioritizes optimal performance, ensuring swift and responsive user experiences.",
  "home-features-3": "Versatile",
  "home-features-3-body":
    "Unleash the power of simplicity and versatility as our framework empowers you to build dynamic, feature-rich applications with ease.",
  "footer-attributions": "Attributions",
  "footer-attribution-hero-image-by-vecteezy": "Hero image by Vecteezy",
  "footer-attribution-play-button-icons-by-flaticon":
    "Play button icons by Flaticon",
  "footer-attribution-next-icons-by-roundicons":
    "Next icons by Roundicons - Flaticon",
  "footer-attribution-full-moon-icons-by-vectorsmarket15":
    "Full moon icons by vectorsmarket15 - Flaticon",
  "footer-attribution-rocket-icons-by-triangle-squad":
    "Rocket icons by Triangle Squad - Flaticon",
  "footer-attribution-thunder-icons-by-freepik":
    "Thunder icons by Freepik - Flaticon",
  "footer-attribution-laptop-icons-by-vectors-market":
    "Laptop icons by Vectors Market - Flaticon",
  "docs-introduction-header": "Introduction",
  "docs-introduction-body":
    "Welcome to the documentation for our imaginary JavaScript framework! This framework is designed to simplify the process of building web applications by providing a set of powerful tools and abstractions.",
  "docs-getting-started-header": "Getting Started",
  "docs-getting-started-body":
    "To get started with our framework, you&apos;ll need to install it using npm or yarn. Once installed, you can create a new project and start building your application using our intuitive API and component system.",
  "docs-features-header": "Features",
  "docs-features-body":
    "Our framework comes with a wide range of features to help you build modern and performant web applications. Some of the key features include:",
  "docs-features-1": "Component-based architecture",
  "docs-features-2": "State management",
  "docs-features-3": "Routing",
  "docs-features-4": "Form handling",
  "docs-features-5": "Server-side rendering",
  "blog-article-1-title": "Introducing Moon Lake",
  "blog-article-1-content":
    "Moon Lake is a revolutionary JavaScript framework that will change the way you build web applications.",
  "blog-article-1-full-content":
    "Moon Lake is a revolutionary JavaScript framework that is set to change the way you build web applications. It is designed with a focus on simplicity, performance, and versatility, making it an excellent choice for both beginners and experienced developers.\nThe core philosophy of Moon Lake is to provide a simple and intuitive API that allows developers to build complex applications with ease. It achieves this by abstracting away many of the complexities associated with web development, allowing you to focus on writing your application logic rather than dealing with low-level details.\nPerformance is another key focus of Moon Lake. It uses a virtual DOM to minimize the number of updates to the actual DOM, resulting in faster rendering times and a smoother user experience. Additionally, Moon Lake is designed to be lightweight, with a small bundle size that ensures your applications load quickly.\nVersatility is the third pillar of Moon Lake. It is designed to be adaptable, allowing you to use it for a wide range of applications, from simple static websites to complex single-page applications. It also supports server-side rendering, making it a great choice for SEO-friendly applications.\nOne of the standout features of Moon Lake is its component-based architecture. This allows you to build your application as a collection of reusable components, each with its own state and logic. This approach promotes code reuse and makes your code easier to test and maintain.\nMoon Lake also includes a powerful state management solution. This makes it easy to manage global state in your application, ensuring that your components always stay in sync.\nIn conclusion, Moon Lake is a powerful and flexible JavaScript framework that simplifies the process of building web applications. With its focus on simplicity, performance, and versatility, it is set to become a popular choice among developers. Whether you're a beginner looking to get started with web development, or an experienced developer looking for a more efficient way to build applications, Moon Lake has something to offer you.",
  "blog-article-1-author": "John Doe",
  "blog-article-2-title": "Mastering Moon Lake with TS",
  "blog-article-2-content":
    "Learn how to leverage the power of TypeScript with Moon Lake to create robust and scalable applications.",
  "blog-article-2-full-content":
    "TypeScript is a powerful language that extends JavaScript by adding static types. When used with Moon Lake, it can help you write more robust and maintainable code.\nThe first step to using TypeScript with Moon Lake is to install the TypeScript compiler. This can be done using npm or yarn. Once installed, you can create a new TypeScript file with the .ts extension and start writing your code.\nOne of the key benefits of using TypeScript is that it provides static typing. This means that you can specify the types of your variables, function parameters, and return values. This can help catch errors at compile time, rather than at runtime.\nIn addition to static typing, TypeScript also provides a number of other features that can help improve your code. These include interfaces, generics, and enums, among others.\nWhen working with Moon Lake, TypeScript can be particularly useful. For example, you can use TypeScript's type system to ensure that your components receive the correct props. You can also use it to define the shape of your state, making it easier to manage and manipulate.\nFurthermore, TypeScript can help improve your development workflow. Many modern IDEs have excellent support for TypeScript, providing features like autocompletion, type checking, and refactoring tools. This can make your development process more efficient and enjoyable.\nIn conclusion, TypeScript is a powerful tool that can greatly enhance your experience with Moon Lake. Whether you're a seasoned TypeScript user or a newcomer to the language, I encourage you to give it a try. You might be surprised at how much it can improve your code and your workflow.",
  "blog-article-2-author": "Jane Smith",
  "blog-article-3-title": "Exploring the Depths of Moon Lake",
  "blog-article-3-content":
    "Dive deep into the core concepts of Moon Lake and understand how it works under the hood.",
  "blog-article-3-full-content":
    "Moon Lake is a powerful JavaScript framework that simplifies the process of building web applications. In this article, we will dive deep into the core concepts of Moon Lake and understand how it works under the hood.\nMoon Lake uses a component-based architecture. This means that you build your application as a collection of reusable components, each with its own state and logic. This approach promotes code reuse and makes your code easier to test and maintain.\nOne of the key features of Moon Lake is its virtual DOM. The virtual DOM is a lightweight copy of the actual DOM. When a component's state changes, Moon Lake creates a new virtual DOM and compares it with the old one. It then updates the actual DOM with only the changes that were made, resulting in faster rendering times and a smoother user experience.\nMoon Lake also includes a powerful state management solution. This makes it easy to manage global state in your application, ensuring that your components always stay in sync. It uses a single source of truth, which means that the state of your application is stored in one place, making it easier to debug and test.\nRouting is another important feature of Moon Lake. It allows you to define multiple routes and render different components based on the current URL. This makes it easy to build single-page applications, where the page does not refresh when the user navigates to a different part of the application.\nIn conclusion, Moon Lake is a powerful and flexible JavaScript framework that simplifies the process of building web applications. By understanding its core concepts, you can leverage its full potential and build robust, scalable applications with ease.",
  "blog-article-3-author": "John Doe",
  "blog-article-4-title": "Moon Lake vs Other JS Frameworks",
  "blog-article-4-content":
    "A comparative study of Moon Lake with other popular JavaScript frameworks.",
  "blog-article-4-full-content":
    "In the world of JavaScript frameworks, there are several popular choices, each with its own strengths and weaknesses. In this article, we will compare Moon Lake with other well-known frameworks to help you make an informed decision about which one to use for your next project.\nFirst, let's consider React. React is known for its component-based architecture and virtual DOM, both of which are also key features of Moon Lake. However, Moon Lake stands out with its built-in state management solution, eliminating the need for additional libraries like Redux or MobX.\nNext, let's look at Angular. Angular is a full-featured framework that includes a lot of built-in functionality. However, this can make it feel heavy and complex, especially for beginners. In contrast, Moon Lake offers a simpler, more intuitive API, making it a more accessible choice for developers of all skill levels.\nVue.js is another popular framework. Like Moon Lake, Vue.js is easy to learn and use. However, Moon Lake's focus on performance and its smaller bundle size give it an edge when it comes to building fast, efficient web applications.\nFinally, let's consider Svelte. Svelte is unique in that it compiles your code to tiny, imperative JavaScript at build time, rather than interpreting your application code at runtime. This can result in faster load times and smoother updates. However, Moon Lake's virtual DOM and efficient diffing algorithm ensure that it too delivers excellent performance.\nIn conclusion, while each of these frameworks has its merits, Moon Lake's combination of simplicity, performance, and versatility make it a compelling choice for many developers. Whether you're building a small personal project or a large-scale enterprise application, Moon Lake has the tools and features you need to succeed.",
  "blog-article-4-author": "Jane Smith",
  "blog-article-5-title": "Getting Started with Moon Lake",
  "blog-article-5-content":
    "A beginner's guide to building your first application with Moon Lake.",
  "blog-article-5-full-content":
    "Embracing the Future of Software Development with AI\nThe world of software development is constantly evolving, and one of the most exciting new developments is the use of artificial intelligence (AI) in coding. AI has the potential to revolutionize the way we code, making it faster, more efficient, and even more creative.\nOne of the ways AI is being used in coding is through automated code generation. This involves using AI algorithms to write code based on specific inputs. For example, a developer might input the requirements for a particular piece of software, and the AI would generate the code needed to meet those requirements. This can save developers a significant amount of time and effort, and can also help to reduce the risk of human error.\nAnother exciting application of AI in coding is in code review. AI can be used to automatically review code for errors, inconsistencies, and other issues. This can help to improve the quality of code and can also make the code review process more efficient.\nAI is also being used to help developers understand complex code. By analyzing the code and providing insights into its structure and functionality, AI can help developers to understand and work with complex code more effectively.\nWhile the use of AI in coding is still in its early stages, the potential benefits are enormous. By automating routine tasks, improving code quality, and helping developers to understand complex code, AI has the potential to significantly improve the efficiency and effectiveness of software development.\nAs with any new technology, there are challenges and uncertainties associated with the use of AI in coding. However, by embracing this new technology and exploring its potential, we can help to shape the future of software development in a way that benefits everyone.",
  "blog-article-5-author": "John Doe",
  "blog-article-6-title": "Advanced Techniques in Moon Lake",
  "blog-article-6-content":
    "Explore advanced techniques and best practices to make the most out of Moon Lake.",
  "blog-article-6-full-content":
    "Moon Lake is a powerful JavaScript framework that offers a wide range of advanced techniques and best practices to help developers build robust and scalable applications.\nOne of the key advanced techniques in Moon Lake is the use of lifecycle hooks. These are special methods that get called at different stages of a component's life, such as before it gets created, after it gets updated, and before it gets destroyed. By using lifecycle hooks, developers can control what happens when these events occur, leading to more efficient and performant code.\nAnother advanced technique is the use of directives. Directives are special attributes that can be added to HTML elements to control their behavior. For example, the v-if directive can be used to conditionally render elements, while the v-for directive can be used to render lists of items.\nMoon Lake also supports the use of mixins, which are a way of reusing code across multiple components. By defining a mixin, developers can create reusable chunks of code that can be included in any component, leading to more modular and maintainable code.\nIn addition to these techniques, Moon Lake also offers a number of best practices for developers to follow. These include using single-file components for better code organization, using computed properties for efficient data handling, and using the Vue DevTools extension for debugging.\nIn conclusion, Moon Lake offers a wide range of advanced techniques and best practices that can help developers build robust and scalable applications. By understanding and applying these techniques, developers can take full advantage of the power and flexibility of Moon Lake.",
  "blog-article-6-author": "Jane Smith",
  "about-header-1": "About Our Moon Lake JS Framework",
  "about-body-1":
    "Our Imaginary JS Framework is a powerful and flexible JavaScript framework designed to simplify web development. With its intuitive API and extensive feature set, it empowers developers to build robust and scalable applications with ease.",
  "about-header-2": "Why Choose Our Framework?",
  "about-body-2-1": "Our framework offers a wide range of benefits, including:",
  "about-body-2-li-1": "Efficient and performant code",
  "about-body-2-li-2": "Modular architecture for easy code organization",
  "about-body-2-li-3": "Rich set of built-in components and utilities",
  "about-body-2-li-4": "Extensive documentation and community support",
  "about-body-2-li-5": "Seamless integration with popular tools and libraries",
  "about-body-2-2":
    "Whether you&apos;re a beginner or an experienced developer, our Imaginary JS Framework is the perfect choice for your next web project. Try it out today and experience the power of modern web development!",
  "cookies-banner-text":
    "We value your privacy. In compliance with EU regulations, we inform you that our website does not use any cookies. We do not collect or store any personal data through cookies or similar technologies. You can browse our site with confidence, knowing that your privacy is fully protected.",
  "cookies-banner-button": "I understand",
};

export default dictionary;
