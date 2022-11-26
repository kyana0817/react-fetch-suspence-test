import React from 'react'
import { User } from '../utils/fakeUserApi'

type DetailItemProps = {
  name: string,
  value: string | Array<string>
}

type DetailBodyProps = {
  user: User
}

function DetailItem({name, value}: DetailItemProps) {
  const valueView = (typeof value === 'string')
    ? (<span>{value}</span>)
    : (value.map((item, idx) => <React.Fragment key={idx}>{item}<br/></React.Fragment>))

  return (
    <div className="detail-item">
      <p>{name}:</p>
      <p>{valueView}</p>
    </div>
  )
}

export default function ({user}: DetailBodyProps) {
  return (
    <>
      <DetailItem name={'name'} value={user.name}/>
      <DetailItem name={'age'} value={user.age}/>
      <DetailItem name={'self_intro'} value={user.self_intro}/>
    </>
  )
}