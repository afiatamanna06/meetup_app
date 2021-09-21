import { Button } from '@chakra-ui/button'
import { Box, Container, Divider, Heading } from '@chakra-ui/layout'
import React from 'react'
import androidAppstore from '../assets/android-app-download.png'
import iosAppstore from '../assets/ios-app-download.png'

const Footerbottom = () => {
    return (
        <div>
            <Box color='white' background='#212121' py='10' mt='5'>
                <Container maxW='container.xl'>
                    <Box d='flex' alignItems='center'>
                        <Heading size='md'>
                            Create your own Meetup group.
                        </Heading>
                        <Button colorScheme='white' variant='outline' ml='4'>
                            Get Started
                        </Button>
                    </Box>
                    <Divider my='10'/>
                    <Box>
                        
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Footerbottom
