import style from "./page.module.css";

export default function Contact() {
  return (
    <main className={style.content_container}>
      <h1 className={style.page_title}>Contact Me:</h1>
      <form id="contact-form">
        <label htmlFor={"name"} className={style.contact_label}>Name</label>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <br />
        <br />
        <label className={style.contact_label} htmlFor={"email"} >Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <br />
        <label htmlFor={"message"} className={style.contact_label}>Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <br />
        <br />
        <input type="submit" className={style.submit_button} />
      </form>
    </main>
  );
}
