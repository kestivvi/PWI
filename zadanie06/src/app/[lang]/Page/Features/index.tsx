import styles from "./styles.module.css"

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <h3 className={`${styles.feature_title} mono-font`}>Adaptable</h3>
        <p>
          Elevate your projects with a framework that boasts unparalleled adaptability, effortlessly
          accommodating diverse requirements and scaling with your ambitions.
        </p>
      </div>
      <div className={styles.feature}>
        <h3 className={`${styles.feature_title} mono-font`}>Performant</h3>
        <p>
          Efficiently streamline your development process with a framework that prioritizes optimal
          performance, ensuring swift and responsive user experiences.
        </p>
      </div>
      <div className={styles.feature}>
        <h3 className={`${styles.feature_title} mono-font`}>Versatile</h3>
        <p>
          Unleash the power of simplicity and versatility as our framework empowers you to build dynamic,
          feature-rich applications with ease.
        </p>
      </div>
    </section>
  )
}
