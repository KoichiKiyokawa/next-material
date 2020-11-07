import { Button } from '@material-ui/core'
import { useCounters } from '@/hooks/counters'
import { Counter } from '@/components/molecules/Counter'

const CounterPage = () => {
  const {
    counters,
    incrementAt,
    decrementAt,
    resetAt,
    changeTitleAt,
    addCounter,
  } = useCounters()

  return (
    <>
      {counters.map((counter, i) => (
        <Counter
          key={i}
          count={counter.count}
          title={counter.title}
          onChange={changeTitleAt(i)}
          onIncrement={incrementAt(i)}
          onDecrement={decrementAt(i)}
          onReset={resetAt(i)}
        />
      ))}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={addCounter}
      >
        Add Counter
      </Button>
    </>
  )
}

export default CounterPage
