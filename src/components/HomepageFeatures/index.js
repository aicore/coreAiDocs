import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Quick Start Guide",
    imageUrl: "img/rocket.svg",
    description: (
      <>
        Jump straight into LLMs with our carefully crafted quick-start guide. No complex math or deep learning
        prerequisites required.
      </>
    )
  },
  {
    title: "Practical Examples",
    imageUrl: "img/code.svg",
    description: (
      <>
        Learn through real-world examples and use cases. Understand how LLMs are transforming industries and how you can
        leverage them.
      </>
    )
  },
  {
    title: "Interactive Learning",
    imageUrl: "img/brain.svg",
    description: (
      <>
        Follow along with interactive code examples and demonstrations. Built with React for a smooth learning
        experience.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imageUrl} alt={title} className={styles.featureImage} style={{ height: 150, width: 150 }} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
