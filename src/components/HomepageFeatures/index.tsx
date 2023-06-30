import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Define regions in your images',
    Svg: require('@site/static/img/frameright/feature_crop.svg').default,
    description: (
      <>
        Use the <Link href="https://frameright.app">Frameright webapp</Link> to
        define regions in your images' metadata.
      </>
    ),
  },
  {
    title: 'Add our components to your websites',
    Svg: require('@site/static/img/frameright/feature_stack.svg').default,
    description: (
      <>
        Our components extend <code>&lt;img&gt;</code>-like elements to
        responsively display the best fitting region based on the current
        element size and ratio.
      </>
    ),
  },
  {
    title: 'Stop caring',
    Svg: require('@site/static/img/frameright/feature_graph.svg').default,
    description: (
      <>
        Stop caring about where your images end up in your responsive layout and
        which ratio they get.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
