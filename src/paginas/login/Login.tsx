import { Typography, Button, Hidden, InputAdornment } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Box, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UsuarioLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { addToken, addId } from '../../store/tokens/actions';
import './Login.css';

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  function updatedModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

   useEffect(() => {
    if (
      userLogin.usuario !== '' &&
      userLogin.senha !== '' &&
      userLogin.senha.length >= 8
    ) {
      setForm(true);
    }
  }, [userLogin]);

  const [form, setForm] = useState(false);

  async function conectar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login('usuarios/logar', userLogin, setRespUserLogin);
      toast.success('Usuario conectado. tamo juntão', {
        theme: 'colored',
        autoClose: 2000,
        hideProgressBar: true,
      });

    } catch (error) {
      toast.error(`Deu ruim.`, {
        theme: 'colored',
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  }

  useEffect(() => {
    if (token !== '') {
      dispatch(addToken(token));
      navigate('/home');
    }
  }, [token]);


  useEffect(() => {
    if (respUserLogin.token !== '') {
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString()));
      navigate('/home');
    }
  }, [respUserLogin.token]);



  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid alignItems='center' xs={6}>
        <Box paddingX={15}>
          <form onSubmit={conectar}>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos'>Entrar</Typography>

            <TextField value={userLogin.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />

            <TextField value={userLogin.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

            <Box marginTop={2} textAlign='center'>
                <Button type='submit' variant='contained' className='logar'>
                  Logar
                </Button>
            </Box>
          </form>

          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
            </Box>
            <Link to='/cadastrousuario'>
              <Typography variant='subtitle1'gutterBottom align='center' className='textos'>Cadastre-se</Typography>
            </Link>
              
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className='imagem'>

      </Grid>
    </Grid>
  );
}

export default Login;