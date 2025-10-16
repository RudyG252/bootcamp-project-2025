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
    title: "My Love of Rackets",
    date: "10/16/25",
    description: `I've played a ton of racket sports in my life, and loved or at least liked pretty much all of them,
     so this blog post will be pretty much decicated to talking about my experiences in different racket
     sports, how I got into them, how good/bad I am at them, and how I think they translate between 
     one another.
    `,
    image: "./blogs/images/rackets.jpg",
    imageAlt: "an image of a variety of different rackets",
    slug: "My_Love_of_Rackets",
  },
  {
    title: "My First Blog Entry",
    date: "10/15/25",
    description: `This is just a small entry for my first blog post, in which I will brainstorm and hopefully
     find ideas for future blog posts.`,
    image: "./blogs/images/brainstorm.jpg",
    imageAlt: "A brain with lighting around it",
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
