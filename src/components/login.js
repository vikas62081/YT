import React from 'react'
import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login = () => {
  const paperStyle = { padding: 30, height: '70vh', maxWidth: 280, margin: "0 auto" }
  return <Grid>

    <Paper elevation={3} style={paperStyle}>
      <h1 align='center'>React App</h1>
      <Typography variant='h5'>Sign in</Typography>
      <TextField label="Username" placeholder="Enter username" fullWidth required />
      <TextField label="Password" placeholder="Enter password" type='password' fullWidth required />
      <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Button variant='contained' style={{ margin: "10px 0" }} color='secondary' fullWidth>Sign in</Button>
    </Paper>
  </Grid>
}

export default Login;