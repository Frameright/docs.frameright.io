import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <>
        Learn more about
        <br />
        Image Display Control
      </>
    ),
    Svg: require('@site/static/img/frameright/feature_graph.svg').default,
    description: (
      <>
        Read about the philosophy behind Image Display Control and the benefits
        it brings to developers, creators and businesses at{' '}
        <Link href="https://frameright.io">frameright.io</Link>
      </>
    ),
  },
  {
    title: (
      <>
        Get started with IDC
        <br />
        components and libraries
      </>
    ),
    Svg: require('@site/static/img/frameright/feature_stack.svg').default,
    description: (
      <>
        Learn more about the open-source components and libraries for different
        platforms and languages on the frontend and backend at{' '}
        <Link to="/introduction">docs.frameright.io</Link>
      </>
    ),
  },
  {
    title: (
      <>
        Create images with
        <br />
        IDC metadata
      </>
    ),
    Svg: require('@site/static/img/frameright/feature_crop.svg').default,
    description: (
      <>
        Make your images magically adapt to all environments and containers by
        adding IDC metadata to them for free at{' '}
        <Link href="https://frameright.app">frameright.app</Link>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4 homepage-feature')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
