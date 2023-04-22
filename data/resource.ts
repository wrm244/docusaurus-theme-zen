import { Friends } from './friend'

export interface Resource {
  name: string
  logo: string
  desc: string
  href: string
  tags?: string[]
}

export interface ResourceCategory {
  name: string
  resources: Resource[]
}

const friends: Resource[] = Friends.map(f => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  }
})

export const resourceData: ResourceCategory[] = [
  {
    name: '友链👨‍💻',
    resources: friends,
  },
  {
    name: '添加你收藏的站点',
    resources: [
      {
        name: '动手学深度学习',
        desc: '面向中文读者的能运行、可讨论的深度学习教科书',
        logo: '/assets/images/resource/d2l.png',
        href: 'https://zh.d2l.ai/',
      },
    ],
  },
]
