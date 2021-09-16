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
                <Box flexDirection='row' display='flex' my='10' flexWrap='wrap' justifyContent='space-between'>
                    <Badge borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100'>
                        Boost your career
                    </Badge>
                    <Badge borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100'>
                        Find your zen
                    </Badge>
                    <Badge borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100'>
                        Get moving
                    </Badge>
                    <Badge borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100'>
                        Share launguage + culture
                    </Badge>
                    <Badge borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100'>
                        Read with friends
                    </Badge>
                    <Badge borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100'>
                        Write together
                    </Badge>
                    <Badge borderRadius='3xl' py={2} px={4} mr='4' mb='4' color='white' bg='blue.100'>
                        Hone your craft
                    </Badge>
                </Box>
            </Container>

            <Container maxWidth='container.xl' mt='20'>
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                    <Box>
                        <Heading size='lg' mb='7'></Heading>
                        <Box d='flex' alignItems='center' flexDirection='row' w='100%'></Box>
                        <Box w='100%' mr='2'></Box>
                        <FormControl>
                            <Box>
                                
                            </Box>
                        </FormControl>
                    </Box>
                </Grid>
            </Container>
        </div>
    )
}

export default Main
