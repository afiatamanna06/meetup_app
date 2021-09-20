import React from 'react'
import Storyone from '../assets/story-one.jpg'
import Storytwo from '../assets/story-two.jpg'
import Storythree from '../assets/story-three.jpg'
import { Image } from '@chakra-ui/image'
import { Box, Container, Grid, Heading, Link } from '@chakra-ui/react'

const Stories = () => {
    return (
        <div>
            <Box mt='10'>
                <Container maxW='container.xl'>
                    <Box d='flex' alignItems='center' justifyContent='space-between' mb='7'>
                        <Box align='center' width='100%'>
                            <Heading as='h3' pb='2' alignItems='center' size='lg'>
                                Stories from Meetups
                            </Heading>
                            <Box maxW='700px'>
                                People on Meetup have fostered community, learned new skills,
                                started businesses, and made life-long friends. Learn how.
                            </Box>
                        </Box>
                    </Box>
                    <Grid mt='10' mb='40' templateColumns='repeat(3, 1fr)' gap={6}>
                        <Box width='100%' align='left'>
                            <Link>
                                <Image _hover={{ opacity: '0.8' }} mr='15px' src={Storyone} pos='relative' width='100%' alt='brand'></Image>
                                <Box d='flex' flexDirection='column'>
                                    <Heading alignItems='center' as='h6' fontWeight='black' size='md' pt='4' pb='4'>
                                        Three Ways To Make Coworker Friendships While Working From
                                        Home
                                    </Heading>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Stories
