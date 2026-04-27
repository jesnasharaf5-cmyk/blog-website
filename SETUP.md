# Blog Website with Next.js and Supabase

A modern, responsive blog website built with Next.js 16, React 19, Tailwind CSS, and Supabase.

## Features

 User Authentication (Signup/Login with bcrypt password hashing)
Protected Routes (Blogs, FAQ pages require login)
 Blog Management (List all blogs, view individual blog posts)
 FAQ Section with Accordion
 Support Form for user inquiries
 Responsive Design (Mobile-friendly navigation)
 Persistent Authentication (localStorage integration)

## Prerequisites

- Node.js 18+ and npm
- Supabase Account
- Environment variables configured

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 3. Create Supabase Tables

Run the following SQL in your Supabase SQL Editor:

```sql
-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Blogs Table
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

-- FAQs Table
CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Support Messages Table
CREATE TABLE support_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── signup/route.ts
│   │   │   ├── login/route.ts
│   │   │   └── logout/route.ts
│   │   ├── blogs/
│   │   │   ├── route.ts
│   │   │   └── [slug]/route.ts
│   │   ├── faq/route.ts
│   │   └── support/route.ts
│   ├── auth/page.tsx          # Login/Signup page
│   ├── blogs/page.tsx         # Blog list (protected)
│   ├── blogs/[slug]/page.tsx  # Blog detail (protected)
│   ├── faq/page.tsx          # FAQ page (protected)
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with AuthProvider
│   └── globals.css
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   └── ui/
│       └── button.tsx        # Reusable button component
├── context/
│   └── AuthContext.tsx       # Authentication context
└── lib/
    ├── auth.ts              # Auth utilities
    ├── supabase.ts          # Supabase client
    └── utils.ts             # Helper functions
```

## Authentication Flow

1. User signs up/logs in on `/auth` page
2. Credentials are validated against Supabase
3. User data is stored in localStorage
4. Navigation updates to show user email and logout button
5. Protected routes redirect to `/auth` if not logged in
6. On app load, auth state is restored from localStorage
7. Logout clears localStorage and redirects to home

## API Endpoints

- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - Authenticate user
- `POST /api/auth/logout` - Clear session
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/[slug]` - Get single blog
- `GET /api/faq` - Get FAQ items
- `POST /api/support` - Submit support message

## Security Features

- Passwords hashed with bcryptjs
- Protected routes require authentication
- Supabase RLS policies recommended
- Service role key only used server-side
- Client uses public anon key for data fetching

## Development

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Custom with bcryptjs
- **State Management**: React Context
- **HTTP Client**: Fetch API

## Notes

- All protected routes redirect unauthenticated users to `/auth`
- User sessions are stored in browser localStorage
- FAQ accordion expands/collapses individual items
- Support form accepts optional message field
- All API routes include error handling

## License

MIT
