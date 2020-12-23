import Link from 'next/link'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

export const Nav = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6">Next</Typography>
      <div style={{ marginLeft: 'auto' }}>
        <Link href="/todos">
          <Button color="inherit">Todo List</Button>
        </Link>
        <Link href="/login">
          <Button color="inherit">ログイン</Button>
        </Link>
        <Link href="/counter">
          <Button color="inherit">カウンター</Button>
        </Link>
      </div>
    </Toolbar>
  </AppBar>
)
