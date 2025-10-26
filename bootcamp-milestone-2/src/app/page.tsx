export default function Home() {
  return (
    <main>
      <h1 className="page-title">Rudy's Personal Website</h1>
      <div className="about">
        <div className="about-image">
          <img src="public/pfp.png" alt="A profile picture" />
        </div>
        <div className="about-text">
          <p>
            Hey, I'm <strong>Rudy Good</strong>, and i'm a first year
            <br />
            Cal Poly computer science major from <em>San Diego, California</em>.
          </p>
          <p>
            <strong>I enjoy:</strong>
          </p>
          <ul className="about-me-list">
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
