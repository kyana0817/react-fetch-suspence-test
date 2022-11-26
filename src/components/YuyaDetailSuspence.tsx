import { wrapFakeUserApi } from '../utils/fakeUserApi'
import DetailBody from './DetailBody'

const resouce = wrapFakeUserApi('Yuya')

export default function () {
  return (
    <DetailBody user={resouce.read()!}/>
  )
}