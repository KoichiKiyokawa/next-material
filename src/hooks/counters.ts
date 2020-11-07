import { useCallback, useState } from 'react'
import type { TCounter } from '@/types/TCounter'

const getEmptyCounter = (): TCounter => ({
  count: 0,
  title: '',
})

export const useCounters = () => {
  const [counters, setCounters] = useState<TCounter[]>([getEmptyCounter()])
  const incrementAt = useCallback(
    (index: number) => () => {
      counters[index].count++
      setCounters([...counters])
    },
    []
  )
  const decrementAt = useCallback(
    (index: number) => () => {
      if (counters[index].count >= 1) {
        counters[index].count--
        setCounters([...counters])
      }
    },
    []
  )
  const resetAt = useCallback(
    (index: number) => () => {
      counters[index].count = 0
      setCounters([...counters])
    },
    []
  )
  const changeTitleAt = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      counters[index].title = e.target.value
      setCounters([...counters])
    },
    []
  )
  const addCounter = useCallback(() => {
    counters.push(getEmptyCounter())
    setCounters([...counters])
  }, [])

  return {
    counters,
    incrementAt,
    decrementAt,
    resetAt,
    changeTitleAt,
    addCounter,
  }
}
