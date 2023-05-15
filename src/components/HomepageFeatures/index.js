import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Attribute Builder',
    Svg: require('@site/static/img/attribute.jpg').default,
    description: (
      <>
        Define and customize attributes allowing for detailed and comprehensive product information
      </>
    ),
  },
  {
    title: 'Template Builder',
    Svg: require('@site/static/img/template.jpg').default,
    description: (
      <>
        Customize templates to match your brand's identity and effortlessly apply them to your products
      </>
    ),
  },
  {
    title: 'Category Builder',
    Svg: require('@site/static/img/category.jpg').default,
    description: (
      <>
        Create and manage categories to ensure efficient navigation and intuitive product discovery
      </>
    ),
  },
  {
    title: 'Product Dashboard',
    Svg: require('@site/static/img/dashboard.jpg').default,
    description: (
      <>
        Gain full visibility and control over your product data through our intuitive Product Dashboard
      </>
    ),
  },
  {
    title: 'Task Creation',
    Svg: require('@site/static/img/task.jpg').default,
    description: (
      <>
        Streamline content acquisition, enrichment, and audit processes with our task creation module
      </>
    ),
  },
  {
    title: 'Onboarding Flow',
    Svg: require('@site/static/img/team.jpg').default,
    description: (
      <>
        Simplify the onboarding process for brand and service providers with our intuitive onboarding flow
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} alt={title} />
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
