import { Box, Button, Grid, Typography } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

import './Home.css';


function Home() {

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#24d2c0" }}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>compartilhe conosco suas experiências!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
          </Box>

        </Grid>
        <Grid item xs={6} >
          <img src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/06/Viagem-Mundo-PNG.png" alt="" width="650px" height="440px" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
      </Grid>

      <Grid container justifyContent='center' alignItems='center'>
        <TabPostagem />
      </Grid>
    </>
  );
}

export default Home;