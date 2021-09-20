import { Box, Container, Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import React from 'react'
import popularImage from '../assets/popular-image.jpg'

const Popular = () => {
    return (
        <div>
            <Box mt='20'>
                <Container maxW='container.xl'>
                    <Box mb='7' d='flex' alignItems='center' justifyContent='space-between'>
                        <Box>
                            <Heading as='h3' size='lg' alignItems='center' fontWeight='black'>
                                Popular groups
                            </Heading>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Popular
