import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


const Hero = () => {

    const StyledHero = styled ("div") (()=> ({
        background: "black",
        height: "100vh"

    }))

    const StyledImage = styled ("img") (()=> ({
        width: "100%",
        borderRadius: "50%"

    }))
 
    return (
<>
<StyledHero>

<Container>
<Grid container spacing={2}>
  <Grid item xs={12} md = {4}>
  <StyledImage src={Avatar}/>
  </Grid>
  <Grid item xs={12} md = {8}>

    <Typography color="primary" variant="h1" textAlign = "center">Jéferson Alves</Typography>
    <Typography color="primary" variant="h2" textAlign = "center">I'm a Web Developer</Typography>
   
    <Grid container>
        <Grid item xs={12} md={6}>
            <Button> 
        <DownloadIcon/>Download CV</Button>

        </Grid>
        <Grid item xs={12} md={6} >
        <Button>
        <EmailIcon/>Contact me</Button>

        </Grid>
        
    </Grid>
    
   
  </Grid>
 
</Grid>
</Container>
        
</StyledHero>

</>
    

  
    )
  }
  
  export default Hero
  