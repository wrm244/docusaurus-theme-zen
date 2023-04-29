
## Docusaurus-Theme-Zen [<img src="static/assets/images/avatar300.png" width="90" height="90" align="right">](https://wrm244.github.io/docusaurus-theme-zen/)

<p align="center">
<img src="https://img.shields.io/github/last-commit/wrm244/docusaurus-theme-zen?label=update&logo=github" alt="last-commit" />
<img src="https://github.com/wrm244/docusaurus-theme-zen/actions/workflows/ci.yml/badge.svg" alt="Github Action" />
<img src="https://img.shields.io/badge/readme%20style-standard-brightgreen.svg" alt="standard-readme compliant" />
<img src="https://img.shields.io/node/v/create-docusaurus" alt="node-current" />
<img src="https://img.shields.io/github/languages/code-size/wrm244/docusaurus-theme-zen" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/release-date/wrm244/docusaurus-theme-zen" alt="GitHub Release Date" />
</p>

<p align=center>
<a href="https://wrm244.github.io/docusaurus-theme-zen/">Online Preview</a> | <a href="./README.md">简体中文</a>
</p>

<p align=center>
<a href="https://stackblitz.com/github/wrm244/docusaurus-theme-zen" rel="nofollow"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"></a> <a href="https://vercel.com/new/clone?repository-url=https://github.com/wrm244/docusaurus-theme-zen/tree/main&project-name=blog&repo-name=blog" rel="nofollow"><img src="https://vercel.com/button"></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/wrm244/docusaurus-theme-zen" rel="nofollow"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
<br/>
<a href="https://docusaurus.io/zh-CN/" target="_blank"><img alt="Built with Docusaurus" style="height:50px;margin-top:0.5rem" src="https://wrm244.github.io/assets/images/buildwith.png" /></a>  <a href="https://www.netlify.com/" target="_blank"><img alt="Built with Netlify" style="height:50px;margin-top:0.5rem " src="https://wrm244.github.io/assets/images/netlify-color-accent.svg" /></a>     
</p>

## Introduction

![网站首页](./static/assets/images/docus.png)

![网站首页](./static/assets/images/docus_bark.png)

This is a theme built with docusaurus, which combines the simplicity and ease of use of docusaurus with other open source page design solutions, supports MDX and React, is extensible and customizable, and also has a beautiful design, a blog and documentation integrated theme, providing you with an excellent personal page solution.This theme Built with🦖 <a href="https://docusaurus.io/">Docusaurus</a>

## Features
- [x] 主页+博客+文档三合一
- [x] 利用Typescript自定义页面
- [X] 生成全静态网页文件 
- [x] 优化页面符合现代美观(毛玻璃虚化样式，pwa优化...)
- [X] 支持国际化 
- [x] 代码项目展示
- [x] 代码块显示行号
- [x] 结合obsidian进行写作 
- [ ] 直接转为幻灯片格式，可在线浏览放映
- [ ] 个人简历页面
- [ ] 分享功能
## Directory Structure

```bash
├── blog                           # blog
│   ├── first-blog.md
│   └── authors.yml                # author information (can have multiple authors)
├── docs                           # documentation/notes
│   └── stack
│         └──introduction.md       # notes introduction
├── data                           #project/navigation/friend link data
│   ├── friend.ts                  # friend link
│   ├── project.ts                 # project
│   └── resource.ts                #resource navigation
├── i18n                           #internation alization
├── src
│   ├── components                 # components
│   ├── css                        # custom CSS
│   ├── pages                      # custom pages
│   ├── plugin                     # custom plugin
│   └── theme                      # custom theme components
├── static                         # static resource files
│   └── assets                     # static files
├── docusaurus.config.js           # site configuration information
├── sidebars.js                    # document sidebar
├── package.json
└── yarn.lock                      # recommended to use yarn to keep
```
## Installation

Clone the repository and install the dependencies.
```bash
git clone https://github.com/wrm244/docusaurus-theme-zen.git ./blog
cd blog
yarn
yarn start
```

Generate static web page code(./build).

```bash
yarn run build
```

Start the web service.
```bash
yarn run serve
```

## Github Action CI
The process configuration is deployed to the cloud server and GitHub Pages simultaneously:
Modify the configuration file under the ```/.github/workflows/ci.yml``` path.
```yml
name: ci

on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Use Node.js v18.5
        uses: actions/setup-node@v3
        with:
          node-version: '18.5.0'

      #Use caching
      - name: Cache node modules
        uses: actions/cache@v1
        id: cache
        with:
          path: node_modules
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Install Dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: yarn install
      
      - name: Build Project
        run: |
          yarn run build

      # Use SSH to synchronize to the cloud server
      # - name: SSH Deploy
      #   uses: easingthemes/ssh-deploy@v2.2.11
      #   env:
      #     SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}
      #     ARGS: '-avzr --delete'
      #     SOURCE: './build'
      #     REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
      #     REMOTE_USER: 'root'
      #     TARGET: '/www/wwwroot/wrm244'

      - name: Github page Deploy
        uses: wrm244/docusaurus-deploy-action@master 
        env:
          PERSONAL_TOKEN: ${{ secrets.PERSION_TOKEN }} # Github personal account key
          PUBLISH_REPOSITORY: wrm244/docusaurus-theme-zen # Public repository, format: GitHub username/repository name
          BRANCH: gh-pages # Deploy the branch
          PUBLISH_DIR: ./build # Deploy the files in the ./build directory

```


## License

[MIT](./LICENSE) © RiverMountain 100%
