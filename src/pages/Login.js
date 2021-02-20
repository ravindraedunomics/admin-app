import React, { useState } from 'react'

import { Button, Container, Box, Typography, TextField, CircularProgress } from '@material-ui/core'
import { Email } from '@material-ui/icons'
function Login() {
    const [ email, setEmail ] = useState("")
    let [ emailError, setEmailError ] = useState("")
    const [ password, setPassword ] = useState("")
    let [ passwordError, setPasswordError ] = useState("")

    const login = () => {
        let valid_data = true;
        setEmailError("")
        setPasswordError("")
        passwordError = null
        if (email === "") {
            setEmailError("Required!")
            valid_data = false;
        }
        if (password === "") {
            setPasswordError("Required!")
            valid_data = false;
        }
        if (valid_data) {
            // history.push("/");
            
        }

    }
    return (
        <Container maxWidth="sm">
            <Box p="24px" bgcolor="white" borderRadius="12px" boxShadow="2" mt="50px" textAlign="center">
                <Typography variant="h5" color="textSecondary">
                    Admin
               </Typography>
                <TextField
                    label="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError != null}
                    helperText={emailError}
                    id="outline-size-small"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                    type="emial"
                    color="secondary"
                    // Required
                />
                <TextField
                    label="Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    error={passwordError != null}
                    helperText={passwordError}
                    id="outline-size-small"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                    type="password"
                    color="secondary"
                    // Required
                /><br />

                <br /><CircularProgress thickness={4} size={24} />

                <Button variant="contained" color="primary" onClick={login} fullWidth>Login</Button> <br />
            </Box>
        </Container >
    )
}

export default Login
