export interface Intoroduce {
  title: string
  description: string
  image: string
  imageText: string
  linkText: string
}

export interface Careers {
  title: string
  careers: Career[]
}

export interface Career {
  company: string
  date: string
  department: string
  team: string
}

export interface Projects {
  title: string
  projects: Project[]
}

export interface Project {
  corp: string
  date: string
  description: string
  id: number
  title: string
  imageText: string
  works: string[]
  skills: string[]
  link: Link[]
}

export interface Link {
  title: string
  url: string
}
