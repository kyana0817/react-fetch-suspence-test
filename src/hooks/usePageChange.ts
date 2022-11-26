import { useState } from "react";

type UsePageChange = (limit: number) => [
  pageNum: number,
  handleNext: () => void,
  handlePrev: () => void
]

export const usePageChange: UsePageChange = (limit) => {
  const [pageNum, setPageNum] = useState<number>(0)

  const handleNext = () => {setPageNum(prev => (prev + 1) >= limit? prev: prev + 1)}
  const handlePrev = () => {setPageNum(prev => prev == 0? prev: prev - 1)}

  return [pageNum, handleNext, handlePrev]
}