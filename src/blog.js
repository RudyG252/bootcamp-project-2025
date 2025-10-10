var blogs = [
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
var blogContainer = document.getElementById("blog-container");
appendBlogs();
function appendBlogs() {
    blogs.forEach(function (blog) {
        var blogImage = document.createElement("img");
        var blogPostContainer = document.createElement("div");
        var blogHeader = document.createElement("h1");
        var blogDescription = document.createElement("p");
        var blogSlug = document.createElement("a");
        blogHeader.innerHTML = blog.title;
        blogDescription.innerHTML = blog.description;
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;
        blogSlug.href = "./blogs/" + blog.slug + ".html";
        blogSlug.innerHTML = "Learn More";
        blogPostContainer.appendChild(blogHeader);
        blogPostContainer.appendChild(blogImage);
        blogPostContainer.appendChild(blogDescription);
        blogPostContainer.appendChild(blogSlug);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(blogPostContainer);
    });
}
