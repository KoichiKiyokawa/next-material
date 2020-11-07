import { Button, TextField } from '@material-ui/core'
import type { TCounter } from '@/types/TCounter'

type Props = TCounter & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onIncrement: () => void
  onDecrement: () => void
  onReset: () => void
}

export const Counter = ({
  count,
  title,
  onChange,
  onIncrement,
  onDecrement,
  onReset,
}: Props) => (
  <div>
    <TextField {...{ onChange }} value={title} />
    <span>{count}</span>
    <Button onClick={onIncrement}>+1</Button>
    <Button onClick={onDecrement}>-1</Button>
    <Button onClick={onReset}>0</Button>
  </div>
)
