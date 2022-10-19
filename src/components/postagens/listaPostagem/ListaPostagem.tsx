import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { busca } from '../../../services/Service';
import React, {useState, useEffect} from 'react';
import Postagem from '../../../models/Postagem';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import './ListaPostagem.css';
import { toast } from 'react-toastify';
import { Box } from "@mui/material";



function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    let navigate = useNavigate()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if(token === '') {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate('/login') 
        }
    }, [token])
 
    async function getPosts() {
        await busca('/postagens', setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

       useEffect(() => {
        getPosts()
    }, [posts.length]) 

    return (
        <>       
            {
                posts.map(post => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                Postagens
                                </Typography>
                                <Typography variant="h5" component="h2">
                                {post.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                {post.texto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                {post.tema?.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                Postado por: {post.usuario?.nome}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>
                            <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                            <Box mx={1}>
                                <Button variant="contained" size='small' color="primary" >
                             atualizar
                                </Button>
                             </Box>
                                </Link>
                                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                            <Box mx={1}>
                                <Button variant="contained" size='small' color="secondary">
                            deletar
                                </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))    
            }
        </>
    );
}

export default ListaPostagem;