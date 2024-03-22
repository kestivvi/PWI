import styles from "./styles.module.css";

export default function Page() {
    return (
        <main className={styles.main}>
            <h2 className={styles.header}>Introduction</h2>
            <p>
                Welcome to the documentation for our imaginary JavaScript framework! This framework is designed to simplify the process of building web applications by providing a set of powerful tools and abstractions.
            </p>
            <h2 className={styles.header}>Getting Started</h2>
            <p>
                To get started with our framework, you'll need to install it using npm or yarn. Once installed, you can create a new project and start building your application using our intuitive API and component system.
            </p>
            <h2 className={styles.header}>Features</h2>
            <p>
                Our framework comes with a wide range of features to help you build modern and performant web applications. Some of the key features include:
            </p>
            <ul>
                <li>Component-based architecture</li>
                <li>State management</li>
                <li>Routing</li>
                <li>Form handling</li>
                <li>Server-side rendering</li>
            </ul>
        </main>
    );
}
