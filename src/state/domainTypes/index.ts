export interface User {
  id: number,
  name: string,
  email: string,
  city: string,
  company: string
}

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
}