import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quick Start Guide',
    Svg: require('@site/static/img/house-icon.svg').default,
    description: (
      <>
        Jump straight into LLMs with our carefully crafted quick-start guide. 
        No complex math or deep learning prerequisites required.
      </>
    ),
  },
  {
    title: 'Practical Examples',
    Svg: require('@site/static/img/code-brackets-icon.svg').default,
    description: (
      <>
        Learn through real-world examples and use cases. Understand how LLMs 
        are transforming industries and how you can leverage them.
      </>
    ),
  },
  {
    title: 'Interactive Learning',
    Svg: require('@site/static/img/interactive-icon.svg').default,
    description: (
      <>
        Follow along with interactive code examples and demonstrations. 
        Built with React for a smooth learning experience.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureContainer}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
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