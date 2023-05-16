import React, { useState, useRef, useEffect  } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeaderTyper from '../components/HeaderTyper';
import { shuffle } from '../utils'
import image from '../../static/img/1.png';
import styles from './index.module.css';

function HomepageHeader() {
  const [toTypeWords] = useState(
    shuffle([
      'Email:wanghanlinlin@126.com',
      'QQ:894606483',
      'WeiChat:wang894606483',
      'AuroraPiexl',
    ])
  );
  return (
    <header className={styles.heroBanner}>
      <div>
        <div>
        <h1 style={{ fontSize: '300%' }}>
          <div className={styles.title} style={{ fontSize: '150%' }}>
            Hello!
          </div>
          Welcome Here.
        </h1>
        </div>
        <div>
          <img src={image} alt='HeroImg'/>
        </div>


        <p className="hero__subtitle"><HeaderTyper
          className='Text'
          words={toTypeWords}
          delay={5000}
          defaultText={toTypeWords[0] || 'Aurora'}
        /></p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
