import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const Main = () => {
    return (
        <div>
            <Box>
                <Container maxWidth="container.xl">
                    <Box d="flex" alignItems="center" flexDirection='row' py='20'>
                        <Box mr='6'>
                            <Heading>
                                <Box fontWeight='black'>Dive in! There are so many things to do on Meetup</Box>
                            </Heading>
                            <Box fontWeight="medium">
                                Join a group to meet people, make friends, find support, grow a
                                business, and explore your interests. Thousands of events are
                                happening every day, both online and in person!
                            </Box>
                        </Box>
                        <Box>
                            <Image src=''/>
                        </Box>
                    </Box>
                </Container>
            </Box> 
        </div>
    )
}

export default Main
