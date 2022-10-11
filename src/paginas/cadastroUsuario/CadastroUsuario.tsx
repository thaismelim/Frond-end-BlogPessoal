import { Typography } from '@material-ui/core';
import { Box, Button, Grid, TextField } from '@mui/material';
import { ChangeEvent, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Usuario from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';

function CadastroUsuario() {
  let navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>('');

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  const [user, setUser] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: ''
  });

  const [userResult, setUserResult] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: ''
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if(confirmarSenha == user.senha){
    cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
    toast.success('Usuario cadastrado com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
        });
        
    }else{
        toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
    }
}

  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6} className="bg-cadastro"></Grid>
        <Grid container xs={6} justifyContent="center">
          <Grid item xs={8} justifyContent="center">
            <form onSubmit={onSubmit}>
              <Typography variant="h2">Cadastre-se</Typography>

              <TextField
                required
                name="nome"
                value={user.nome}
                id="nome"
                label="Nome completo"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <TextField
                required
                name="usuario"
                value={user.usuario}
                id="usuario"
                label="Usuário (email)"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
             
              <TextField
                required
                name="senha"
                value={user.senha}
                id="senha"
                label="Senha"
                variant="outlined"
                fullWidth
                type="password"
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <TextField
                required
                name="confirmarSenha"
                value={confirmarSenha}
                id="confirmarSenha"
                label="Confirmar senha"
                variant="outlined"
                fullWidth
                type="password"
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  confirmarSenhaHandle(event)
                }
              />

                <Box marginTop={2} textAlign='center'>
                <Link to='/login' className='text-decorator-none'>
                <Button variant='contained' className='btnCancelar'>
                Cancelar
                </Button>
                </Link>
                <Button type='submit' variant='contained' className='cadastrar' >
                Cadastrar
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CadastroUsuario;