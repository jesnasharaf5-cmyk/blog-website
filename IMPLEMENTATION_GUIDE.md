# Blog Website Implementation - Complete Setup Guide

## What Has Been Built

This is a fully functional blog website with the following features:

### ✅ Pages Implemented
1. **Home Page** (`/`) - Welcome page with call-to-action buttons
2. **Auth Page** (`/auth`) - Login/Signup toggle form
3. **Blogs Page** (`/blogs`) - Protected, displays all blog posts
4. **Blog Detail Page** (`/blogs/[slug]`) - Protected, shows individual blog content
5. **FAQ Page** (`/faq`) - Protected, accordion with support form

### ✅ API Routes Implemented
1. `/api/auth/signup` - User registration with password hashing
2. `/api/auth/login` - User authentication
3. `/api/auth/logout` - Session cleanup
4. `/api/blogs` - Fetch all blogs
5. `/api/blogs/[slug]` - Fetch single blog
6. `/api/faq` - Fetch FAQ items
7. `/api/support` - Submit support messages

### ✅ Authentication Features
- Bcryptjs password hashing
- JWT-style user ID/email storage in localStorage
- Automatic route protection with redirects
- Auth state restoration on app load
- Navbar displays user email when logged in
- Logout functionality

### ✅ Components
- Responsive Navbar with mobile menu
- Custom Button component
- Auth form with email/password validation
- Blog cards with links
- FAQ accordion
- Support form

## Quick Start

### 1. Install Dependencies
```bash
cd "c:\Users\user6\Desktop\web page\blog-website"
npm install
```

### 2. Set Up Supabase
1. Create a Supabase project at https://supabase.com
2. Copy your API URL and keys
3. Create `.env.local` file with your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Create Database Tables
Go to Supabase SQL Editor and run:

```sql
-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create blogs table
CREATE TABLE blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  author TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create faqs table
CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create support_messages table
CREATE TABLE support_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Add Sample Data (Optional)
```sql
-- Insert sample blog post
INSERT INTO blogs (title, slug, excerpt, content, author)
VALUES (
  'Getting Started with Next.js',
  'getting-started-nextjs',
  'Learn the basics of Next.js and how to build amazing web applications',
  'Next.js is a React framework for building web applications with built-in optimizations...',
  'John Doe'
);

-- Insert sample FAQs
INSERT INTO faqs (question, answer)
VALUES 
  ('What is this blog about?', 'This blog covers web development, Next.js, and modern web technologies.'),
  ('How do I contact support?', 'Use the support form on the FAQ page to send us your questions and feedback.');
```

### 5. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Testing the Application

1. **Home Page** - Visit `/` to see the welcome page
2. **Sign Up** - Go to `/auth` and create a new account
3. **Login** - Use your credentials to log in
4. **View Blogs** - After login, navigate to `/blogs`
5. **Read Blog** - Click a blog to read the full post
6. **FAQ** - Visit `/faq` to see FAQ accordion and support form
7. **Logout** - Click logout in the navbar

## File Structure
```
src/
├── app/
│   ├── api/
│   │   ├── auth/signup/route.ts
│   │   ├── auth/login/route.ts
│   │   ├── auth/logout/route.ts
│   │   ├── blogs/route.ts
│   │   ├── blogs/[slug]/route.ts
│   │   ├── faq/route.ts
│   │   └── support/route.ts
│   ├── auth/page.tsx
│   ├── blogs/page.tsx
│   ├── blogs/[slug]/page.tsx
│   ├── faq/page.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   └── ui/button.tsx
├── context/
│   └── AuthContext.tsx
├── lib/
│   ├── auth.ts
│   ├── supabase.ts
│   └── utils.ts
└── .env.local
```

## Dependencies Added
- `@supabase/supabase-js` - Database and auth
- `bcryptjs` - Password hashing
- `clsx` - Conditional CSS classes
- `tailwind-merge` - Tailwind utility merging

## Security Notes
1. Never commit `.env.local` to version control
2. Use service role key only for server-side operations
3. Consider enabling Supabase RLS (Row Level Security)
4. Passwords are hashed with bcryptjs (10 salt rounds)
5. User sessions stored securely in localStorage

## Troubleshooting

### npm install fails
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### Environment variables not working
- Ensure `.env.local` is in the root of `blog-website` folder
- Restart the dev server after adding env variables

### Database connection fails
- Check that your Supabase URL and keys are correct
- Ensure tables exist in your database
- Check Supabase network access is not restricted

### Password hashing issues
- Make sure bcryptjs is installed: `npm install bcryptjs`
- Hashing happens server-side in API routes

## Production Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy using Vercel CLI or connect GitHub repo
```

### Other Platforms
```bash
npm run build
npm start
```

Make sure to set environment variables on your hosting platform.

## Next Steps for Enhancement
1. Add user profile page
2. Implement blog creation/editing
3. Add comments to blog posts
4. Email notifications for support messages
5. Analytics dashboard
6. Blog search functionality
7. User preferences/settings
8. Admin panel for content management

## Support
For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
