type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Blog3",
    date: "date",
    description: `A blog post is a single article or piece of content published on a blog, which is an
     online platform for sharing information, thoughts, or ideas. These posts can cover a variety of 
     topics and include text, images, and videos. They are typically displayed in reverse chronological order
      on the blog, meaning the most recent post appears first.`,
    image: "sky.jpg",
    imageAlt: "imageAlt",
    slug: "blog1",
  },
  {
    title: "Blog2",
    date: "date",
    description: `A blog post is a single article or piece of content published on a blog, which is an
     online platform for sharing information, thoughts, or ideas. These posts can cover a variety of 
     topics and include text, images, and videos. They are typically displayed in reverse chronological order
      on the blog, meaning the most recent post appears first.`,
    image: "sky.jpg",
    imageAlt: "imageAlt",
    slug: "blog2",
  },
  {
    title: "My First Blog Entry",
    date: "10/16/25",
    description: `This is just a small entry for my first blog post, in which I will brainstorm and hopefully
     find ideas for future blog posts.`,
    image: "sky.jpg",
    imageAlt: "imageAlt",
    slug: "First_Blog",
  },
];

const blogContainer = document.getElementById("blog-container");
appendBlogs();

function appendBlogs() {
  blogs.forEach((blog) => {
    const blogImage = document.createElement("img");
    const blogPostContainer = document.createElement("div");
    const blogPostContentContainer = document.createElement("div");
    const blogPostDescriptionContainer = document.createElement("div");
    blogPostContentContainer.className = "blog-post-content-container";
    blogPostContainer.className = "blog-post-container";
    const blogHeader = document.createElement("h1");
    const blogDescription = document.createElement("p");
    blogDescription.className = "blog-description";
    const blogSlug = document.createElement("a");
    blogHeader.innerHTML = blog.title;
    blogDescription.innerHTML = blog.description;
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    blogSlug.href = "./blogs/" + blog.slug + ".html";
    blogSlug.innerHTML = "Learn More";
    blogPostContentContainer.appendChild(blogHeader);
    blogPostContainer.appendChild(blogImage);
    blogPostDescriptionContainer.appendChild(blogDescription);
    blogPostContentContainer.appendChild(blogPostDescriptionContainer);
    blogPostContainer.appendChild(blogPostContentContainer);
    blogPostContentContainer.appendChild(blogSlug);
    blogContainer?.append(blogPostContainer);
  });
}
