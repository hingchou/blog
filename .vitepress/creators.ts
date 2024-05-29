export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'arnoldxiao',
    avatar: '',
    username: 'arnoldxiao',
    title: '博客作者',
    desc: '出航！！',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/hingchou' },
      { type: 'twitter', icon: 'twitter', link: 'https://x.com/nightowlhc' },
    ],
    nameAliases: ['arnoldxiao', '逸云'],
    emailAliases: ['nightowlhc@gmail.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
