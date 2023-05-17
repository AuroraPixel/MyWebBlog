import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HeaderTyper from '../components/HeaderTyper';
// import { shuffle } from '../utils'
// import image from '@site/static/img/1.png';
// import styles from './index.module.css';
import HomepageHeader from '../components/HomepageHeader'


// //图片磨砂效果
// function Image({ src, alt }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={clsx(styles.my_image_container, { [styles.hover]: isHovered })}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <img src={src} alt={alt} />
//       <div className={styles.overlay}></div>
//     </div>
//   );
// }

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
