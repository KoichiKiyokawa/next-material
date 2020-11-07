import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from '@material-ui/core'
import { useState, useCallback } from 'react'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const handleInput = useCallback(
    (label: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [label]: e.target.value })
    },
    []
  )

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ form })
  }, [])

  return (
    <Card>
      <CardContent>
        <h2>サービスへログインする</h2>
        <form onSubmit={onSubmit}>
          <TextField
            type="email"
            label="Email"
            fullWidth
            autoComplete="username"
            onChange={handleInput('email')}
          />
          <TextField
            type="password"
            autoComplete="current-password"
            label="Password"
            fullWidth
            onChange={handleInput('password')}
          />
          <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained" color="primary">
              ログイン
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  )
}
export default Login
