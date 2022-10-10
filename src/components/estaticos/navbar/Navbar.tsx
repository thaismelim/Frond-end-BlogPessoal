import React from "react";
import {AppBar, Toolbar, Typography, Box} from "@material-ui/core";
import {Link,  useNavigate} from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";
import './Navbar.css';

function Navbar() {

    const[token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert('Usuário deslogado')
        navigate('/login')
    }

    return(
        <>
            <AppBar position="static">
                <Toolbar className='toolbar'>
                    <Box className='blogPessoal'>
                        <Box className='cursor'>
                            <Typography variant="h5" color="inherit">
                                Blog Pessoal
                            </Typography>
                        </Box>
                    </Box>

                    <Box className='menu'>
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/posts' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/temas' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>

                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>

                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;