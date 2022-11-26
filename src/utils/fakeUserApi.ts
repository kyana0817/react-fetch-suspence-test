import { wrapPromise } from './wrapPromise'


export type User = {
  name: string;
  age: string;
  self_intro: string| string[];
}

const users: User[] = [
  {
    name: 'Yuya',
    age: '24',
    self_intro: "I'm a Web Developer"
  },
  {
    name: 'Nero',
    age: '10',
    self_intro: "I'm a Dog"
  },
  {
    name: 'Kyana',
    age: '24',
    self_intro: ["I'm a kyana", "Yuya's online handle"]
  }
]



export async function fakeUserApi(queryName: string): Promise<User> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = users.find(user => user.name === queryName)
  
      if (user) {
        res(user)
      } else {
        rej({})
      }

    }, 1000)
  })
}

export function wrapFakeUserApi(queryName: string) {
  const userPromise = fakeUserApi(queryName)
  return wrapPromise<User>(userPromise)
}