import  React, {useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const defaultTheme = createTheme();



function LoginComp() {

    const ufname = useRef(null);
    const upass = useRef(null);
    const ulast = useRef(null);
    const uemail = useRef(null);

    let udata=[];

    const nav=useNavigate();

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     // console.log({
    //     //   email: data.get('email'),
    //     //   password: data.get('password'),
    //     // });
    // };

    const getdata = (event) => {
        console.log("form submitted")
        event.preventDefault();
       
        let username = ufname.current.value;
        let useremail = uemail.current.value;
        let userlastname = ulast.current.value;
        let userpassword = upass.current.value;
        
        console.log('username:',username)
        console.log('useremail:',useremail)
        console.log('userlastname:',userlastname)
        console.log('userpassword:',userpassword)
        

        axios.get(`http://localhost:8888/users/`).then((res) => {
           const  udata = res.data
            const validuser = udata.find((val) =>  {return (val.ufname.toLowerCase() === username.toLowerCase() && val.uemail.toLowerCase() === useremail.toLowerCase() &&
            val.ulast.toLowerCase()===userlastname.toLowerCase() && val.upass.toLowerCase()===userpassword.toLowerCase())} )
            if (validuser) {
                nav("/Dashboard")
                sessionStorage.setItem("user3",ufname)
                window.alert("login succesfull")
            }else{
                window.alert("Wrong Credentials")
            }
    
        }).catch((err)=>{})

    
    }

    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={getdata} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        inputRef={ufname}
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        inputRef={ulast}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        inputRef={uemail}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        inputRef={upass}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </div>
    )
}


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/#">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default LoginComp;
