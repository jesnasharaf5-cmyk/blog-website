import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { blogs as staticBlogs } from '@/data/blogs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function GET(request: NextRequest) {
  try {
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ blogs: staticBlogs });
    }

    return NextResponse.json({ blogs: blogs && blogs.length > 0 ? blogs : staticBlogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ blogs: staticBlogs });
  }
}
