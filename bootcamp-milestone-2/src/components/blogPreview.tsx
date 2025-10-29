import React from "react";
import style from "./blogPreview.module.css";
import { Blog } from "@/static/blogData";
import Link from "next/link";
import Image from "next/image";


export default function BlogPreview(props: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <Link href={props.slug} className={style.blog_post_container}>
      <img src={props.image} alt={props.imageAlt}></img>
      <div className={style.blog_post_content_container}>
        <h1>{props.title}</h1>
        <div className={style.blog_post_decription_container}>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
}
