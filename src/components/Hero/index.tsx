import React from 'react'

import { useTrail, animated } from '@react-spring/web'
import Translate from '@docusaurus/Translate'
import { useThemeConfig} from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'

import Link from '@docusaurus/Link'

import HeroMain from './img/javascript_illustration.svg'

import JuejinIcon from '@site/static/svg/juejin.svg'
import { Icon } from '@iconify/react'
import Button from '../Button';
import styles from './styles.module.scss'

/* 下滑箭头设计 */
function ArrowDownBtn(): JSX.Element {
  return (
    <span className={styles.arrowDownBtnWrapper}>
      <svg
        className={styles.arrowDownBtn}
        aria-hidden="true"
        viewBox="-75.52 -43.52 599.04 599.04"
        fill="currentColor"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight-40,
            behavior: "smooth"
          })
        }}>
        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
      </svg>
    </span>
  )
}

function Hero() {
  const trails = useTrail(4, {
    from: { opacity: 0, transform: 'translate3d(0px, 2em, 0px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    config: {
      mass: 3,
      tension: 460,
      friction: 45,
    },
  })

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={trails[0]} className={styles.hero_text}>
          <Translate id="homepage.hero.greet">欢迎使用</Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">docusaurus-theme-zen</Translate>
          </span>
        </animated.div>
        <animated.p style={trails[1]}>
          <Translate id="homepage.hero.text">
            {`这是使用docusaurus搭建的主题,结合了docusaurus简单易用与其他开源页面设计方案、支持MDX和React、可扩展和定制等优点，以及加上设计美观便利、博客与文档一体的主题，为你提供一个优秀的个人页面解决方案。`}
          </Translate>
          <br />
          {/* <Translate
            id="homepage.hero.look"
            values={{
              note: (
                <Link to="/docs/stack">
                  <Translate id="hompage.hero.note">笔记</Translate>
                </Link>
              ),
              project: (
                <Link to="/project">
                  <Translate id="hompage.hero.project">项目</Translate>
                </Link>
              ),
              link: (
                <Link to="/resource">
                  <Translate id="hompage.hero.link">导航</Translate>
                </Link>
              ),
              idea: (
                <Link to="/tags/">
                  <Translate id="hompage.hero.idea">想法</Translate>
                </Link>
              ),
            }}
          >
            {`你可以随处逛逛与评论，查看{note}、{project}、{link}、以及我的{idea}。`}
          </Translate> */}
          <br />
          {/* 徽章的效果 */}
          <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wrm244/docusaurus-theme-zen?label=Update&logo=github" style={{ boxShadow: '0px 16px 30px rgb(62 196 109 / 15%)', marginTop: '14px' }} /> <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/wrm244/docusaurus-theme-zen/ci.yml?label=CI%20Build&logo=github" style={{ boxShadow: '0px 16px 30px rgb(62 196 109 / 15%)', marginTop: '14px' }}></img>
        </animated.p>
        <SocialLinks style={trails[2]} />
        <animated.div style={trails[3]}>
          <a className={styles.intro} href={'./first-blog'}>
            <Translate id="hompage.hero.introduce">自我介绍</Translate>
          </a>
          <span>　</span>
          <Button isLink href={'https://github.com/wrm244/docusaurus-theme-zen/'} target="_blank">
            <Translate id="hompage.hero.text.repository">Github仓库</Translate>
          </Button>
        </animated.div>
      </div>
      
      
      <div className={styles.bloghome__image}>
        <ArrowDownBtn />
        <HeroMain />
        <ArrowDownBtn />
      </div>
    </animated.div>
  )
}

export function SocialLinks({ ...prop }) {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    twitter: string
    juejin: string
    csdn: string
    qq: string
    wx: string
    cloudmusic: string
    zhihu: string
  }

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href="/rss.xml" target="_blank" aria-label="Really Simple Syndication">
        <Icon icon="ri:rss-line" />
      </a>
      <a href={socials.github} target="_blank" aria-label="github">
        <Icon icon="ri:github-line" />
      </a>
      <a href={socials.juejin} target="_blank" aria-label="juejin">
        <JuejinIcon />
      </a>
      <a href={socials.qq} target="_blank" aria-label="QQ">
        <Icon icon="ri:qq-line" />
      </a>
      <a href={socials.twitter} target="_blank" aria-label="twitter">
        <Icon icon="ri:twitter-line" />
      </a>
      <a href={socials.zhihu} target="_blank" aria-label="zhihu">
        <Icon icon="ri:zhihu-line" />
      </a>
    </animated.div>
  )
}

export default Hero
