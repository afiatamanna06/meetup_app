import { Box, Container, Grid, Heading, Link } from '@chakra-ui/layout'
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
                        <Box>
                            <Link fontWeight='semibold' color='teal.500'>
                                Explore more groups
                            </Link>
                        </Box>
                    </Box>
                    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                        <Box border='1px' borderColor='gray.200' p='15px' width='100%' align='left'>
                            <Box d='flex' alignItems='center'>
                                <Image position='relative' w='50px' mr='15px' src={popularImage} alt='brand' ></Image>
                                <Heading></Heading>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Popular
