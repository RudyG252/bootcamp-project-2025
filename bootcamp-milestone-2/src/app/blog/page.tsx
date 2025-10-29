import BlogPreview from "@/components/blogPreview";
import blogs from "@/static/blogData";
import style from './page.module.css'

export default function Blog() {
  return (
    <div className={style.blog_container}>
      {blogs.map((blog) => (
        <BlogPreview
          key={blog.key}
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
