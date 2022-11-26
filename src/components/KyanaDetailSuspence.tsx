import { wrapFakeUserApi } from '../utils/fakeUserApi'
import DetailBody from './DetailBody'

const resouce = wrapFakeUserApi('Kyana')

export default function () {
  return (
    <DetailBody user={resouce.read()!}/>
  )
}