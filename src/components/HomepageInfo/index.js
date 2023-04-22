import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles1 from '@site/src/components/Hero/styles.module.scss';


const FeatureList = [
  {
    title: 'Contact  Me',
    description: (
      <>
      </>
    ),
    img: 'img/pixel/shenle.jpg',
    img_github : 'img/pixel/github.svg',
    img_about: 'img/pixel/aboutme.svg', 
    img_wechat: 'img/pixel/wechat.svg', 
    img_qq: 'img/pixel/qq.svg',
  },
];

function GameBoy({img}){
  return (
    <div class={styles['gameboy']}>
      <div class={styles['body']}></div>
      <div class={styles['screen-box']}>
        <div class={styles['decorate']}></div>
        <div class={styles['screen']}>
          <img src={img}></img>
        </div>
      </div>
      <div class={styles['lights']}></div>
      <div class={styles['buttons-1']}></div>
      <div class={styles['buttons-2']}></div>
      <div class={styles['buttons-2-2']}></div>
      <div class={styles['pad-back']}>
        <div class={styles['pad-top']}></div>
      </div>
      <div class={styles['details-top']}></div>
      <div class={styles['details-back']}>
        <div class={styles['details-r']}></div>
      </div>
    </div>
  );
}

function Info({title, img, img1, img_github, img_about, img_wechat, img_qq}) {
  return (
    <div className={styles['info-container']}>
      <div className={styles['card']}>
        <div className={styles['back']}></div>
        
        <div className={styles['zoom']}><GameBoy img={img} /></div>
        <div className={styles['content']}>
          <h2>{title}</h2>
          <div className={styles['social-icons']}>
            <div className={styles['icons-top']}>
              <div className={styles['icon-t']}>
                {/* <a href="https://space.bilibili.com/373512714" target="_blank"> */}
                <a href="/about" target="_blank">
                  <img src={img_about} />
                </a>
              </div>
              <div className={styles['icon-l']}>
                <a href="https://github.com/Shake-Jarjane" target="_blank">
                  <img src={img_github} />
                </a>
                
              </div>
            </div>
            <div className={styles['icons-back']}>
              <div className={styles['icon-r']}>
                  <a href="http://wpa.qq.com/msgrd?v=3&uin=2531535061&site=qq&menu=yes" target="_blank" >
                  <img src={img_qq} />
                  <img 
                    src={useBaseUrl("../img/qq.jpg")}
                    className={`dropdown__menu ${styles.dropdown__menu}`}
                  />
                </a>
              </div>
              <div className={styles['icon-b']}>
              <a href="https://cdn-us.imgs.moe/2023/01/17/63c66e6fe7adf.jpg" target="_blank" >
                  <img src={img_wechat} />
                  <img 
                    src={useBaseUrl("../img/wechat.jpg")}
                    className={`dropdown__menu ${styles.dropdown__menu}`}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageInfo() {
  return (
    <div className="row">
      {FeatureList.map((props, idx) => (
        <Info key={idx} {...props} />
      ))}
    </div>
  );
}
