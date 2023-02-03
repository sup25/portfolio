import React from 'react'
import { Box, Typography, Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import illu from "../crdimg/illu.png";
import graphic from "../crdimg/graphic.jpg";
import { Container } from '@mui/system';
const About = () => {
    return (
        <Container id="about">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    mt: { lg: '70px', xs: '70px' },
                    ml: { sm: '50px' }
                }}
            >
                <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={illu}
                            alt="illustration"
                        />
                        <CardContent>

                            <Typography gutterBottom variant="h5" >
                                As an Illustrator
                            </Typography>
                            <Typography variant="body" color="text.secondary" sx={{ mb: 1.5, }}>
                                I can create various types of illustrations such as logos, icons, illustrations, and more.<br />
                                I have the ability to understand color, composition, and design principles and apply them in my work.<br />
                                I can use vector graphics editing program to create illustrations.
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" sx={{

                            color: 'white', borderRadius: '50px', background: '#2E3B55', "&.MuiButtonBase-root:hover": {
                                bgcolor: "#D4AF37"
                            }
                        }}>Explore</Button>
                    </CardActions>
                </Card>


                <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={graphic}
                            alt="illustration"
                        />
                        <CardContent>

                            <Typography gutterBottom variant="h5" >
                                As a Graphic Designer
                            </Typography>
                            <Typography variant="body" color="text.secondary" sx={{ mb: 1.5, }}>
                                I can design visual concepts for a variety of mediums including print materials, websites, advertising, packaging, etc.
                                I have a strong understanding of typography, color theory, and design principles which I use to create visually appealing and effective designs that meet the client's needs.
                                I can use computer software to create designs, or I can communicate ideas by hand.
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" sx={{

                            color: 'white', borderRadius: '50px', background: '#2E3B55', "&.MuiButtonBase-root:hover": {
                                bgcolor: "#D4AF37"
                            }
                        }}>Explore</Button>
                    </CardActions>
                </Card>




            </Box >
        </Container>
    )
}

export default About
