import React, { useState, useRef, useEffect  } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeaderTyper from '../components/HeaderTyper';
import { shuffle } from '../utils'
import image from '../../static/img/computer1.jpg';

import styles from './index.module.css';


const ImageComponent = ({ src, width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const img = new Image();

    // Load the image
    img.src = src;
    img.onload = () => {
      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;

      // Draw the image on the canvas
      context.drawImage(img, 0, 0, width, height);

      // Get the image data and iterate over each pixel
      const imageData = context.getImageData(0, 0, width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        // Set the pixel color to white if the alpha value is 0
        if (a === 0) {
          data[i] = 255;
          data[i + 1] = 255;
          data[i + 2] = 255;
          data[i + 3] = 255;
        }
      }

      // Put the modified image data back onto the canvas
      context.putImageData(imageData, 0, 0);
    };
  }, [src, width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        border: 'none',
        margin: '0',
        padding: '0',
        display: 'block',
      }}
    />
  );
};

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
        <ImageComponent src={image}  width={'1000'} height={'1000'} />
          {/* <img src={image} alt='HeroImg'/> */}
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
