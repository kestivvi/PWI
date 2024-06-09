"use client";

import { Card } from "primereact/card";
import { useDictionary } from "@/dictionary";
import { Dictionary } from "@/dictionary/types";
import CustomLink from "@/components/CustomLink";
import { useParams } from "next/navigation";
import styles from "./styles.module.css";

export default function Page() {
  const pathParams = useParams();
  const id = pathParams.id as string;

  const d = useDictionary();

  const title = d(`blog-article-${id}-title` as keyof Dictionary);
  const author = d(`blog-article-${id}-author` as keyof Dictionary);
  const fullContent = d(`blog-article-${id}-full-content` as keyof Dictionary);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.author}>{author}</p>
      <p className={styles.content}>
        {fullContent.split("\n").map((text) => (
          <p>{text}</p>
        ))}
      </p>
    </main>
  );
}
