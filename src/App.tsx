import React, { Suspense } from 'react'
import { usePageChange } from './hooks'
import YuyaDetail from './components/YuyaDetail'
import NeroDetail from './components/NeroDetail'
import KyanaDetail from './components/KyanaDetail'
const YuyaDetailSuspence = React.lazy(async () => import('./components/YuyaDetailSuspence'))
const NeroDetailSuspence = React.lazy(async () => import('./components/NeroDetailSuspence'))
const KyanaDetailSuspence = React.lazy(async () => import('./components/KyanaDetailSuspence'))



const ParsonDetails = () => {
  const [pageNum, handleNext, handlePrev] = usePageChange(3)
  return (
    <div className="detail">
      <div className="detail-textarea">
        {(() => {
          switch(pageNum) {
          case 0: return <YuyaDetail/>
          case 1: return <NeroDetail/>
          case 2: return <KyanaDetail/>
          default: return <></>
        }})()}
      </div>
      <div className="page-buttons">
        <button onClick={handlePrev}>prev</button>
        {pageNum}
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  )
}

const ParsonDetailSuspences = () => {
  const [pageNum, handleNext, handlePrev] = usePageChange(3)
  return (
    <div className="detail">
      <div className="detail-textarea">
        <Suspense fallback={<p className="detail-loading">Loading</p>}>
          {(() => {
            switch(pageNum) {
            case 0: return <YuyaDetailSuspence/>
            case 1: return <NeroDetailSuspence/>
            case 2: return <KyanaDetailSuspence/>
            default: return <></>
          }})()}
        </Suspense>
      </div>
      <div className="page-buttons">
        <button onClick={handlePrev}>prev</button>
        {pageNum}
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <ParsonDetails/>
      <ParsonDetailSuspences/>
    </div>
  )
}

export default App
