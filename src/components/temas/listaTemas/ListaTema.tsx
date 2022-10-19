import { CardContent, Typography , Card, CardActions, Button, Container} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Tema from '../../../models/Tema'
import { busca } from '../../../services/Service'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'
import { Box } from "@mui/material";

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])
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


 
    async function getTemas() {
        await busca('/temas', setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

   
    useEffect(() => {
        getTemas()
    }, [temas.length]) 



    return (
        <>       
     <Container>
        {/* mapeamento do array de temas, para recriar a estrutura inteira para cada tema existente */}
        {temas.map((tema) => (
          <Box m={2}>
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tema
                </Typography>
                <Typography variant="h5" component="h2">
                  Tema {tema.id} - {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link to={`/atualizarTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color='primary'>atualizar</Button>
                    </Box>
                  </Link>
                  <Link to={`/apagarTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' className="color">deletar</Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Container>
    </>
  );
}

export default ListaTema;