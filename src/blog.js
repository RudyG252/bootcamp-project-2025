var blogs = [
    {
        title: "My Love of Rackets",
        date: "10/16/25",
        description: "I've played a ton of racket sports in my life, and loved or at least liked pretty much all of them,\n     so this blog post will be pretty much decicated to talking about my experiences in different racket\n     sports, how I got into them, how good/bad I am at them, and how I think they translate between \n     one another.\n    ",
        image: "./blogs/images/rackets.jpg",
        imageAlt: "an image of a variety of different rackets",
        slug: "My_Love_of_Rackets",
    },
    {
        title: "My First Blog Entry",
        date: "10/15/25",
        description: "This is just a small entry for my first blog post, in which I will brainstorm and hopefully\n     find ideas for future blog posts.",
        image: "./blogs/images/brainstorm.jpg",
        imageAlt: "A brain with lighting around it",
        slug: "First_Blog",
    },
];
var blogContainer = document.getElementById("blog-container");
appendBlogs();
function appendBlogs() {
    blogs.forEach(function (blog) {
        var blogImage = document.createElement("img");
        var blogPostContainer = document.createElement("a");
        blogPostContainer.href = "./blogs/" + blog.slug + ".html";
        var blogPostContentContainer = document.createElement("div");
        var blogPostDescriptionContainer = document.createElement("div");
        blogPostContentContainer.className = "blog-post-content-container";
        blogPostContainer.className = "blog-post-container";
        var blogHeader = document.createElement("h1");
        var blogDescription = document.createElement("p");
        blogDescription.className = "blog-description";
        blogHeader.innerHTML = blog.title;
        blogDescription.innerHTML = blog.description;
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;
        blogPostContentContainer.appendChild(blogHeader);
        blogPostContainer.appendChild(blogImage);
        blogPostDescriptionContainer.appendChild(blogDescription);
        blogPostContentContainer.appendChild(blogPostDescriptionContainer);
        blogPostContainer.appendChild(blogPostContentContainer);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(blogPostContainer);
    });
}
