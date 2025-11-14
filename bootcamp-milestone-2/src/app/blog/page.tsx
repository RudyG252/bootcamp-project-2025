import BlogPreview from "@/components/blogPreview";
import style from "./page.module.css";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function BlogPage() {
  console.log(process.env.MONGO_URI as string)
  const blogs = await getBlogs();
  if (blogs === null) {
    return <div className={style.blog_container}>No Blogs Yet</div>;
  }
  return (
    <div className={style.blog_container}>
      {blogs.map((blog) => (
        <BlogPreview
          key={blog._id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}
          slug={blog.slug}
          date={blog.date}
        />
      ))}
    </div>
  );
}
