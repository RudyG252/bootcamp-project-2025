var blogs = [
    {
        title: "Blog1",
        date: "date",
        description: "A blog post is a single article or piece of content published on a blog, which is an\n     online platform for sharing information, thoughts, or ideas. These posts can cover a variety of \n     topics and include text, images, and videos. They are typically displayed in reverse chronological order\n      on the blog, meaning the most recent post appears first.",
        image: "sky.jpg",
        imageAlt: "imageAlt",
        slug: "blog1",
    },
    {
        title: "Blog2",
        date: "date",
        description: "A blog post is a single article or piece of content published on a blog, which is an\n     online platform for sharing information, thoughts, or ideas. These posts can cover a variety of \n     topics and include text, images, and videos. They are typically displayed in reverse chronological order\n      on the blog, meaning the most recent post appears first.",
        image: "sky.jpg",
        imageAlt: "imageAlt",
        slug: "blog2",
    },
    {
        title: "Blog3",
        date: "date",
        description: "A blog post is a single article or piece of content published on a blog, which is an\n     online platform for sharing information, thoughts, or ideas. These posts can cover a variety of \n     topics and include text, images, and videos. They are typically displayed in reverse chronological order\n      on the blog, meaning the most recent post appears first.A blog post is a single article or piece of content published on a blog, which is an\n     online platform for sharing information, thoughts, or ideas. These posts can cover a variety of \n     topics and include text, images, and videos. They are typically displayed in reverse chronological order\n      on the blog, meaning the most recent post appears first.A blog post is a single article or piece of content published on a blog, which is an\n     online platform for sharing information, thoughts, or ideas. These posts can cover a variety of \n     topics and include text, images, and videos. They are typically displayed in reverse chronological order\n      on the blog, meaning the most recent post appears first.A blog post is a single article or piece of content published on a blog, which is an\n     online platform for sharing information, thoughts, or ideas. These posts can cover a variety of \n     topics and include text, images, and videos. They are typically displayed in reverse chronological order\n      on the blog, meaning the most recent post appears first.A blog post is a single article or piece of content published on a blog, which is an\n     online platform for sharing information, thoughts, or ideas. These posts can cover a variety of \n     topics and include text, images, and videos. They are typically displayed in reverse chronological order\n      on the blog, meaning the most recent post appears first.",
        image: "sky.jpg",
        imageAlt: "imageAlt",
        slug: "blog3",
    },
];
var blogContainer = document.getElementById("blog-container");
appendBlogs();
function appendBlogs() {
    blogs.forEach(function (blog) {
        var blogImage = document.createElement("img");
        var blogPostContainer = document.createElement("div");
        var blogPostContentContainer = document.createElement("div");
        var blogPostDescriptionContainer = document.createElement("div");
        blogPostContentContainer.className = "blog-post-content-container";
        blogPostContainer.className = "blog-post-container";
        var blogHeader = document.createElement("h1");
        var blogDescription = document.createElement("p");
        blogDescription.className = "blog-description";
        var blogSlug = document.createElement("a");
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
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(blogPostContainer);
    });
}
