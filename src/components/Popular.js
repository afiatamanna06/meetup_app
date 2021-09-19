import { Box, Container, Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import React from 'react'
import popularImage from '../assets/popular-image.jpg'

const Popular = () => {
    return (
        <div>
            <Box>
                <Container maxW='container.xl'>
                    <Box d='flex' alignItems='center' justifyContent='space-between'>
                        <Box>
                            <Heading>
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
