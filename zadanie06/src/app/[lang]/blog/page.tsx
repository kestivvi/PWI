"use client";

import styles from "./styles.module.css";
import { Card } from "primereact/card";
import { useDictionary } from "@/dictionary";
import { Dictionary } from "@/dictionary/types";
import CustomLink from "@/components/CustomLink";

export default function Page() {
  const d = useDictionary();

  const articles = Array.from({ length: 6 }, (_, i) => ({
    title: d(`blog-article-${i + 1}-title` as keyof Dictionary),
    content: d(`blog-article-${i + 1}-content` as keyof Dictionary),
    author: d(`blog-article-${i + 1}-author` as keyof Dictionary),
  }));

  return (
    <main className={styles.main}>
      {articles.map((article, index) => (
        <CustomLink key={article.title} href={`/blog/${article.title}`}>
          <Card
            key={index}
            title={article.title}
            subTitle={article.author}
            style={{
              backgroundColor: "var(--color-bg-light)",
            }}
          >
            <p>{article.content}</p>
          </Card>
        </CustomLink>
      ))}
    </main>
  );
}
