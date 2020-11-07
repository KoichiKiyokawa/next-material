import { memo } from 'react'
import { Button, TextField } from '@material-ui/core'
import type { TCounter } from '@/types/TCounter'

type Props = TCounter & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onIncrement: () => void
  onDecrement: () => void
  onReset: () => void
}

export const Counter = memo(
  ({ count, title, onChange, onIncrement, onDecrement, onReset }: Props) => {
    console.log('Counter')
    return (
      <div>
        <TextField {...{ onChange }} value={title} />
        <span>{count}</span>
        <Button onClick={onIncrement}>+1</Button>
        <Button onClick={onDecrement}>-1</Button>
        <Button onClick={onReset}>0</Button>
      </div>
    )
  },
  (prev, next) => prev.count === next.count && prev.title === next.title
)
