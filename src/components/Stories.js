import React from 'react'
import Storyone from '../assets/story-one.jpg'
import Storytwo from '../assets/story-two.jpg'
import Storythree from '../assets/story-three.jpg'
import { Box, Container, Heading } from '@chakra-ui/react'

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
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Stories
