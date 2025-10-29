import Image from "next/image"
import style from "@/blogPages/page.module.css"

export default function My_Love_of_Rackets() {
  return (
    <main>
      <div className={style.blog_page}>
        <div className={style.blog_header}>
          <h1>My First Blog</h1>
          <p>
            By <strong>Rudy Good</strong> ·
            <time>October 15, 2025</time>
          </p>
          <Image
            width={800}
            height={1000}
            className={style.blog_image}
            src="/brainstorm.jpg"
            alt="an image of a brain with thunder around it (brainstorm)"
          />
        </div>
        <div className={style.blog_content}>
          <p>
            My goal in this blog post is to simply brainstorm some ideas for
            future blog posts. I'm a little lost on where to get started as I've
            never really made anything like a blog post before and I'm not
            exactly sure what it entails. I'm also not exactly sure what the
            topic... genre? is supposed to be? Should it be stuff about my life,
            random stuff I find iteresting, stuff about strictly coding
            projects/clubs, I'm not really sure. I guess I'll try a couple
            different types and really decide based on what I want to write
            about the most.
          </p>
          <h2>Ideas For Blog Posts:</h2>
          <h3>About My Life:</h3>
          <ul>
            <li>My Love of Racket Sports</li>
            <li>Getting Used to College</li>
            <li>My Animals (Dogs and Cats!!!)</li>
          </ul>
          <h3>Random Stuff I Could Yap About:</h3>
          <ul>
            <li>FRC Strategy</li>
            <li>Pokemon Showdown/Competitive Pokemon</li>
            <li>Magic (The Card Game)</li>
          </ul>
          <h3>Coding/Personal Projects:</h3>
          <ul>
            <li>The Development of This Website</li>
            <li>My Pokemon Showdown API</li>
            <li>
              Ideas For Other Personal Projects (kind of like this blog post)
            </li>
          </ul>
          <h2>My Favorites:</h2>
          <p>
            I really like the idea of writing about how much I like racket
            sports, it's a big part of my life and I could have a lot of fun
            writing about the different ones I've played and getting into them.
            I also love my animals so it would be really fun finding pictures of
            all of them to show off, so I think those are my top two. My third
            favorite would probably be talking about pokemon showdown because
            although I'm really really bad at it, I like to braindump on a
            google doc when teambuilding so I already have a lot of writing
            about it that I could kind of just reformat and put on a blog post.
          </p>
        </div>
      </div>
    </main>
  );
}
