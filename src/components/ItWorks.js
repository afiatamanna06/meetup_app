import React from 'react'
import { Box, Container, Heading, Link } from '@chakra-ui/layout'
import { Grid } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import joinGroup from '../assets/joinagroup.svg'

const ItWorks = () => {
    return (
        <div>
            <Box>
                <Container maxWidth='container.xl' my='20'>
                    <Heading textAlign='center' size='lg' pb='2'>How Meetup works</Heading>
                    <Box align='center' mx='auto' maxWidth='700px' pb='10' fontSize='xl'>
                        Meet new people who share your interests through online and in-person
                        events. It’s free to create an account.
                    </Box>

                    <Grid templateColumns='repeat(3, 1fr)' gap='6'>
                        <Box mx='auto' align='center'>
                            <Image w='100%' boxSize='160px' src={joinGroup} alt='brand'></Image>
                            <Heading>
                                <Link>
                                    <Box>
                                        Join a Group
                                    </Box>
                                </Link>
                            </Heading>
                        </Box>
                        <Box></Box>
                        <Box></Box>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default ItWorks
