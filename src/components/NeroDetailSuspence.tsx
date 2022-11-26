import { wrapFakeUserApi } from '../utils/fakeUserApi'
import DetailBody from './DetailBody'

const resouce = wrapFakeUserApi('Nero')

export default function () {
  return (
    <DetailBody user={resouce.read()!}/>
  )
}