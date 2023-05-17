import React,{useState}  from 'react';
import HeaderTyper from '../HeaderTyper';
import HeaderStyles from './index.module.css'
import image from '@site/static/img/1.png';
import { shuffle } from '../../utils'

const HomepageHeader=()=> {
    const [toTypeWords] = useState(
      shuffle([
        'AuroraPiexl',
      ])
    );
    return (
      <header className={HeaderStyles.heroBanner}>
        <div className={HeaderStyles.row_1}>
          <div className={HeaderStyles.container_left}>
            <div className='text'>
              <h1 className={HeaderStyles.title}>
                <span className={HeaderStyles.first} >
                  Code
                </span>
                  &nbsp;your way
                <br/>
                <span className={HeaderStyles.second}>
                 to the future.
                </span>
              </h1>
              <h3 className={HeaderStyles.signature}>
                  不要惋惜以前的努力需要重来、有些路，注定不能省略!
              </h3>
            </div>
            <div className='button'>
  
            </div>
          </div>
          <div className={HeaderStyles.container_right}>
            <img src={image} alt='HeroImg' className={HeaderStyles.HeroImg} />
          </div>
        </div>
        <div>
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

  export default HomepageHeader