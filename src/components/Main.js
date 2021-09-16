import React from 'react'
import { Badge, Box } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import Illustration from '../assets/illustration.svg'
import { Grid } from '@chakra-ui/layout'
import imageOne from '../assets/image-one.jpg'
import imageTwo from '../assets/image-two.jpg'
import imageThree from '../assets/image-three.jpg'
import rightArrow from '../assets/right-arrow.svg'
import { Button } from '@chakra-ui/button'

const Main = () => {
    return (
        <div>
            <Box>
                <Container maxWidth="container.xl">
                    <Box d="flex" alignItems="center" flexDirection='row' py='20'>
                        <Box mr='6' ml='20'>
                            <Heading size='3xl'>
                                <Box fontWeight='black'>Dive in! There are so many things to do on Meetup</Box>
                            </Heading>
                            <Box mt='6' fontWeight="medium" fontSize='larger'>
                                Join a group to meet people, make friends, find support, grow a
                                business, and explore your interests. Thousands of events are
                                happening every day, both online and in person!
                            </Box>
                        </Box>
                        <Box w='100%'>
                            <Image w='100%' h='40' src={Illustration} alt='illustration'/>
                        </Box>
                    </Box>
                </Container>
            </Box> 

            <Container maxWidth='container.xl' mt={10}>
                <Grid templateColumns="repeat(3, 1fr)">
                    <Box>
                        <Image w='100%' borderRadius='lg' src={imageOne} alt='image three'></Image>
                        <Button colorScheme='teal' variant='link' mt='5'>
                        Make new friend
                        <Image w='5%' ml='2' src={rightArrow} alt='right arrow'></Image>
                        </Button>
                    </Box>
                    <Box>
                        <Image w='100%' borderRadius='lg' src={imageTwo} alt='image three'></Image>
                        <Button colorScheme='teal' variant='link' mt='5'>
                        Explore the outdoors
                        <Image w='5%' ml='2' src={rightArrow} alt='right arrow'></Image>
                        </Button>
                    </Box>
                    <Box>
                        <Image w='100%' borderRadius='lg' src={imageThree} alt='image three'></Image>
                        <Button colorScheme='teal' variant='link' mt='5'>
                        Connect over tech
                        <Image w='5%' ml='2' src={rightArrow} alt='right arrow'></Image>
                        </Button>
                    </Box>
                </Grid>
            </Container>

            <Container maxWidth='container.xl'>
                <Box flexDirection='row' display='flex' flexWrap='wrap' justifyContent='space-between'>
                    <Badge>

                    </Badge>
                </Box>
            </Container>
        </div>
    )
}

export default Main
