import { v4 as uuidv4 } from "uuid";

export interface Section {
  key: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const sections: Section[] = [
  {
    key: uuidv4(),
    title: "Rudy's Personal Website",
    description: `A personal website created with help from the Hack4Impact starter
            pack
    `,
    image: "/website.png",
    imageAlt: "a picture of a website",
    slug: "/",
  },
  {
    key: uuidv4(),
    title: "Placeholder",
    description: `Placeholder Project
    `,
    image: "/Rackets.jpg",
    imageAlt: "an image of a variety of different rackets",
    slug: "blogPages/My_Love_of_Rackets",
  },
];

export default sections;
