import { Blog } from '@/types';

export const blogs: Blog[] = [
  {
    id: '1',
    slug: 'getting-started-with-web-development',
    title: 'Getting Started with Web Development',
    excerpt: 'A beginner-friendly guide to kickstarting your journey into modern web development.',
    content: `Web development is an exciting field that combines creativity with technical problem-solving. Whether you want to build personal projects or pursue a professional career, getting started is easier than ever.

The foundation of web development rests on three core technologies: HTML for structure, CSS for styling, and JavaScript for interactivity. Mastering these three will open doors to building anything from simple landing pages to complex web applications.

Start small. Build a personal portfolio, experiment with responsive design, and gradually introduce frameworks like React or Vue. Consistency matters more than speed—dedicate time daily, and you'll see remarkable progress within months.

Beyond the basics, understanding version control with Git is essential. It allows you to track changes, collaborate with others, and maintain a history of your work. Platforms like GitHub and GitLab make sharing your projects and contributing to open source accessible to everyone.

As you grow, explore backend development with Node.js, Python, or Go. Learn about databases, REST APIs, and deployment strategies. The full-stack path gives you complete control over your applications and deepens your understanding of how the web works.

Finally, join developer communities. Participate in forums, attend local meetups, and follow industry leaders. The web development community is incredibly supportive, and learning from others accelerates your growth exponentially.`,
    author: 'Sarah Chen',
    created_at: '2025-01-15T10:00:00Z',
  },
  {
    id: '2',
    slug: 'understanding-authentication-in-nextjs',
    title: 'Understanding Authentication in Next.js',
    excerpt: 'Learn how to implement secure authentication flows in your Next.js applications.',
    content: `Authentication is a critical part of modern web applications. Next.js provides flexible options for implementing secure login, signup, and session management.

You can choose between server-side authentication using API routes and client-side strategies with libraries like NextAuth.js or custom JWT implementations. Each approach has its trade-offs in terms of security, complexity, and scalability.

A common pattern involves creating dedicated API routes for login, signup, and logout, storing session tokens in HTTP-only cookies, and protecting sensitive pages with middleware or client-side guards. Always hash passwords using bcrypt and validate inputs to prevent common vulnerabilities.

When implementing JWT authentication, consider token expiration and refresh strategies. Short-lived access tokens paired with long-lived refresh tokens provide a good balance between security and user experience. Store tokens securely and never expose sensitive credentials in client-side code.

OAuth integration has become standard for modern applications. Supporting providers like Google, GitHub, and Apple reduces friction for users and offloads security responsibilities to established platforms. NextAuth.js simplifies this process with built-in provider support and configurable callbacks.

Remember to implement proper logout functionality that invalidates sessions on both client and server. Clear cookies completely and handle edge cases like concurrent sessions across multiple devices. Regular security audits and keeping dependencies updated are essential practices for maintaining a robust authentication system.`,
    author: 'Marcus Johnson',
    created_at: '2025-02-03T14:30:00Z',
  },
  {
    id: '3',
    slug: 'building-accessible-web-applications',
    title: 'Building Accessible Web Applications',
    excerpt: 'Practical tips for creating inclusive web experiences that work for everyone.',
    content: `Accessibility is not a feature—it's a fundamental aspect of good web design. Over a billion people worldwide live with disabilities, and accessible design ensures your application serves the widest possible audience.

Key practices include using semantic HTML elements, providing alternative text for images, ensuring keyboard navigability, maintaining sufficient color contrast, and implementing ARIA labels where necessary.

Testing with screen readers and automated tools like Lighthouse or axe-core helps catch issues early. Building accessibility into your workflow from the start is far easier than retrofitting it later.

Focus management is crucial for single-page applications. When users navigate between views, ensure focus moves to the new content and screen readers announce page changes. Implement skip links that allow keyboard users to bypass repetitive navigation and jump directly to main content.

Forms require special attention for accessibility. Every input needs an associated label, error messages should be clearly communicated to assistive technologies, and required fields must be indicated both visually and programmatically. Use fieldsets and legends to group related controls, especially for radio buttons and checkboxes.

Motion and animation can cause issues for users with vestibular disorders. Respect the prefers-reduced-motion media query and provide alternatives for essential animations. Ensure that any auto-playing content can be paused or stopped by the user. Creating truly accessible experiences requires empathy and thorough testing with diverse users and assistive technologies.`,
    author: 'Aisha Patel',
    created_at: '2025-02-20T09:15:00Z',
  },
  {
    id: '4',
    slug: 'css-best-practices-in-2025',
    title: 'CSS Best Practices in 2025',
    excerpt: 'Modern CSS techniques and patterns for writing maintainable, scalable styles.',
    content: `CSS has evolved dramatically, and 2025 brings powerful new capabilities alongside refined best practices. Container queries, cascade layers, and native nesting have transformed how we write styles.

Utility-first frameworks like Tailwind CSS continue to dominate for rapid development, while CSS modules and scoped styles remain excellent choices for component-based architectures. The key is consistency—choose a methodology and stick to it across your codebase.

Performance matters too. Minimize unused styles, leverage CSS containment for complex layouts, and use modern color spaces like OKLCH for perceptually uniform palettes. A well-organized style system pays dividends as your project grows.

Logical properties have become the preferred way to handle internationalization. Instead of physical directions like left and right, use inline-start and inline-end to support different writing modes naturally. This small change makes your layouts truly global-ready without extra effort.

The gap property has unified spacing across flexbox and grid layouts, eliminating the need for margin hacks. Combined with aspect-ratio for media elements and clamp() for responsive typography, modern CSS reduces the need for media queries while creating more fluid designs.

Design tokens and CSS custom properties enable powerful theming systems. Define your colors, spacing, and typography scales as variables, then compose them into higher-level abstractions. This approach bridges the gap between design tools and production code, making design system maintenance significantly easier.`,
    author: 'David Kim',
    created_at: '2025-03-08T11:45:00Z',
  },
  {
    id: '5',
    slug: 'how-to-write-clean-code',
    title: 'How to Write Clean Code',
    excerpt: 'Software engineering fundamentals for readable, maintainable, and bug-free code.',
    content: `Clean code is code that is easy to understand, easy to modify, and easy to test. It's not about being clever—it's about being clear.

Meaningful naming is the foundation. Variables, functions, and classes should reveal their purpose without requiring comments. Keep functions small and focused on a single responsibility. Avoid deep nesting and prefer early returns to improve readability.

Refactoring is a continuous process, not a one-time event. Write tests first when possible, and treat code reviews as learning opportunities. Remember: you write code once, but it is read many times. Optimize for the reader.

Comments should explain why, not what. If your code needs extensive comments to be understood, it probably needs restructuring. Self-documenting code through precise naming and clear structure is always preferable to explanatory comments that quickly become outdated.

Error handling deserves the same attention as happy path logic. Use exceptions for exceptional cases, validate inputs at boundaries, and fail fast with descriptive messages. Consistent error handling patterns across your codebase make debugging dramatically easier.

Documentation matters at the API and module level. While inline comments should be minimal, README files and API documentation help consumers understand how to use your code correctly. Strike a balance—document contracts and assumptions, but let the implementation speak for itself.`,
    author: 'Elena Rodriguez',
    created_at: '2025-03-22T16:00:00Z',
  },
  {
    id: '6',
    slug: 'seo-tips-for-bloggers',
    title: 'SEO Tips for Bloggers',
    excerpt: 'Essential search engine optimization strategies to grow your blog audience.',
    content: `Search Engine Optimization (SEO) is the art and science of making your content discoverable. For bloggers, mastering SEO basics can mean the difference between obscurity and a thriving readership.

Start with keyword research to understand what your audience is searching for. Craft compelling, descriptive titles and meta descriptions. Use header tags hierarchically, optimize images with alt text, and ensure your site loads quickly on all devices.

Internal linking helps search engines understand your content structure, while backlinks from reputable sites boost your authority. Most importantly, create genuinely valuable content—no algorithm can replace quality writing that solves real problems for real people.

Technical SEO forms the backbone of your search performance. Implement structured data markup to help search engines understand your content context. Create XML sitemaps and submit them through Google Search Console. Ensure your site is mobile-friendly and passes Core Web Vitals assessments for loading speed, interactivity, and visual stability.

Content strategy should focus on search intent rather than just keywords. Understand whether users are looking for information, trying to make a purchase, or seeking a specific website. Align your content format with their intent—how-to guides for informational queries, comparison pages for commercial intent, and clear navigation for branded searches.

Analytics and continuous improvement separate successful blogs from stagnant ones. Monitor your search rankings, click-through rates, and bounce rates regularly. Use this data to refine your content strategy, update outdated posts, and identify new topic opportunities. SEO is a long-term investment that compounds over time when approached with patience and consistency.`,
    author: 'James Wilson',
    created_at: '2025-04-05T08:30:00Z',
  },
];

