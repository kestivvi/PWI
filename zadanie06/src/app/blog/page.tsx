import Link from "next/link";
import styles from "./styles.module.css";
import { Card } from "primereact/card";

export default function Page() {
    const articles = [
        {
            title: "Introducing Moon Lake",
            content: "Moon Lake is a revolutionary JavaScript framework that will change the way you build web applications.",
            author: "John Doe"
        },
        {
            title: "Mastering Moon Lake with TS",
            content: "Learn how to leverage the power of TypeScript with Moon Lake to create robust and scalable applications.",
            author: "Jane Smith"
        },
        {
            title: "Exploring the Depths of Moon Lake",
            content: "Dive deep into the core concepts of Moon Lake and understand how it works under the hood.",
            author: "John Doe"
        },
        {
            title: "Moon Lake vs Other JS Frameworks",
            content: "A comparative study of Moon Lake with other popular JavaScript frameworks.",
            author: "Jane Smith"
        },
        {
            title: "Getting Started with Moon Lake",
            content: "A beginner's guide to building your first application with Moon Lake.",
            author: "John Doe"
        },
        {
            title: "Advanced Techniques in Moon Lake",
            content: "Explore advanced techniques and best practices to make the most out of Moon Lake.",
            author: "Jane Smith"
        },
    ];

    return (
        <main className={styles.main}>
            {articles.map((article, index) => (
                <Link key={article.title} href={`/blog/${article.title}`}>
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
                </Link>
            ))}
        </main>
    );
}
