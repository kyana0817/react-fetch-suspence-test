import { useState, useEffect } from 'react'
import { User, fakeUserApi } from '../utils/fakeUserApi'
import DetailBody from './DetailBody'

type DetailProps = {
  queryName: string
}

export default function ({queryName}: DetailProps) {
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    (async () => {
      const res = await fakeUserApi(queryName)
      setUser(res)
    })()
  }, [])

  return (
    <>
      {user?<DetailBody user={user}/>: <p className="detail-loading">Loading</p>}
    </>
  )
}