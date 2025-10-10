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
    title: "blog1",
    date: "date",
    description: "description",
    image: "",
    imageAlt: "imageAlt",
    slug: "blog1",
  },
  {
    title: "blog2",
    date: "date",
    description: "description",
    image: "",
    imageAlt: "imageAlt",
    slug: "blog2",
  },
  {
    title: "blog3",
    date: "date",
    description: "description",
    image: "",
    imageAlt: "imageAlt",
    slug: "blog3",
  }
];

const blogContainer = document.getElementById("blog-container");
appendBlogs()

function appendBlogs() {
    blogs.forEach((blog) => {
        const blogImage = document.createElement("img");
        const blogPostContainer = document.createElement("div")
        const blogHeader = document.createElement("h1")
        const blogDescription = document.createElement("p")
        const blogSlug = document.createElement("a")
        blogHeader.innerHTML = blog.title
        blogDescription.innerHTML = blog.description
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;
        blogSlug.href = "./blogs/" + blog.slug + ".html"
        blogSlug.innerHTML = "Learn More"
        blogPostContainer.appendChild(blogHeader)
        blogPostContainer.appendChild(blogImage)
        blogPostContainer.appendChild(blogDescription)
        blogPostContainer.appendChild(blogSlug)
        blogContainer?.append(blogPostContainer)
    });
}