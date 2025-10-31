import React from "react";
import style from "./portfolioSection.module.css";
import Link from "next/link";
import { Section } from "@/static/portfolioData";

export default function PortfolioSection(props: Section) {
  return (
    <div className={style.project}>
      <img
        className={style.project_image}
        src={props.image}
        alt={props.imageAlt}
      />
      <div className={style.project_details}>
        <p className={style.project_name}>
          <strong>{props.title}</strong>
        </p>
        <p className={style.project_description}>{props.description}</p>
        <Link href={props.slug}>LEARN MORE</Link>
      </div>
    </div>
  );
}
