import style from './page.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1 className={style.page_title}>Rudy's Personal Website</h1>
      <div className={style.about}>
        <div >
          <Image className={style.about_image} width={300} height={380} src="/pfp.png" alt="A profile picture"/>
        </div>
        <div className={style.about_text}>
          <p>
            Hey, I'm <strong>Rudy Good</strong>, and i'm a first year
            <br />
            Cal Poly computer science major from <em>San Diego, California</em>.
          </p>
          <p>
            <strong>I enjoy:</strong>
          </p>
          <ul className={style.about_me_list}>
            <li>Rock Climbing</li>
            <li>Squash</li>
            <li>Badminton</li>
            <li>Table Tennis</li>
            <li>Games</li>
            <li>Coding :)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
