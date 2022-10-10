import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, deleteId } from '../../../services/Service';
import './DeletarTema.css';

function DeletarTema() {

    let navigate = useNavigate();

    const { id } = useParams<{id: string}>();
    
    const [token, setToken] = useLocalStorage('token');

    const [tema, setTema] = useState<Tema>();

    useEffect(() => {
        if(token == '') {
            alert('Você precisa estar logado para acessar a página!')
            navigate('/login')
        }
    }, [token]) 

    useEffect(() => {
        if(id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/temas')
        deleteId(`/tema/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Tema deletado com sucesso');
    }
    
    function nao() {
        navigate('/temas')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                <CardContent>
                    <Box justifyContent="center">
                    <Typography color="textSecondary" gutterBottom>
                        Deseja deletar o Tema:
                    </Typography>
                    <Typography color="textSecondary">
                        {tema?.descricao}
                    </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                    <Box mx={2}>
                        <Button onClick={sim} variant="contained" className="buttonsim">
                        Sim
                        </Button>
                    </Box>
                    <Box mx={2}>
                        <Button onClick={nao} variant="contained" className="buttonnao">
                        Não
                        </Button>
                    </Box>
                    </Box>
                </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarTema;