import React from 'react'
import { Box, Container, Heading, Link } from '@chakra-ui/layout'
import { Grid } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import joinGroup from '../assets/joinagroup.svg'
import ticket from '../assets/ticket.svg'
import startGroup from '../assets/start-group.svg'
import { Button } from '@chakra-ui/react'

const ItWorks = () => {
    return (
        <div>
            <Box>
                <Container maxWidth='container.xl' my='20'>
                    <Heading as='h3' textAlign='center' size='lg' pb='2'>How Meetup works</Heading>
                    <Box align='center' mx='auto' maxWidth='700px' pb='10' fontSize='xl'>
                        Meet new people who share your interests through online and in-person
                        events. It’s free to create an account.
                    </Box>

                    <Grid templateColumns={{sm: 'repeat(1, 1fr)',
                                            md: 'repeat(3, 1fr)',
                                            lg: 'repeat(3, 1fr)',
                                            xl: 'repeat(3, 1fr)',
                                            base: 'repeat(1, 1fr)'}} gap='6' mr={{sm: '4',
                                                                                md: '16',
                                                                                lg: '16',
                                                                                xl: '16',
                                                                                base: '4'}} ml={{sm: '4',
                                                                                                md: '16',
                                                                                                lg: '16',
                                                                                                xl: '16',
                                                                                                base: '4'}}>
                        <Box mx='auto' align='center'>
                            <Image w='100%' boxSize='160px' src={joinGroup} alt='brand'></Image>
                            <Heading as='h5' size='md'>
                                <Link>
                                    <Box color='blue.100' pb='4'>
                                        Join a Group
                                    </Box>
                                </Link>
                            </Heading>
                            <p>
                                Do what you love, meet others who love it, find your community.
                                The rest is history!
                            </p>
                        </Box>
                        <Box mx='auto' align='center'>
                            <Image w='100%' boxSize='160px' src={ticket} alt='brand'></Image>
                            <Heading as='h5' size='md'>
                                <Link>
                                    <Box color='blue.100' pb='4'>
                                        Find an event
                                    </Box>
                                </Link>
                            </Heading>
                            <p>
                                Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.
                            </p>
                        </Box>
                        <Box mx='auto' align='center'>
                            <Image w='100%' boxSize='160px' src={startGroup} alt='brand'></Image>
                            <Heading as='h5' size='md'>
                                <Link>
                                    <Box color='blue.100' pb='4'>
                                        Start a group
                                    </Box>
                                </Link>
                            </Heading>
                            <p>
                                You don’t have to be an expert to gather people together and explore shared interests.
                            </p>
                        </Box>
                    </Grid>
                    <Box align='center' mt='16'>
                        <Button _hover={{ opacity: "0.8" }} _focus={{ outline: 0 }} color='white' bg='blue.100' fontWeight='normal' size='md' fontSize='large'>
                            Join Meetup
                        </Button>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default ItWorks
