import { Box, Container, Divider, Grid, Heading, Link } from '@chakra-ui/layout'
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
                    <Grid templateColumns={{sm: 'repeat(1, 1fr)',
                                            md: 'repeat(3, 1fr)',
                                            lg: 'repeat(3, 1fr)',
                                            xl: 'repeat(3, 1fr)',
                                            base: 'repeat(1, 1fr)'}} gap={6}>
                        {/* 1st column */}
                        <Box cursor='pointer' borderRadius='7px' border='1px' borderColor='gray.300' p='15px' width='100%' align='left'>
                            <Box d='flex' alignItems='center'>
                                <Image position='relative' borderRadius='7px' w='50px' mr='15px' src={popularImage} alt='brand' ></Image>
                                <Heading alignItems='center' as='h6' fontWeight='black' size='md'>
                                    Aurora Southlands Parker Woman's Social Group
                                </Heading>
                            </Box>
                            <Divider my='3' mb='2'/>
                            <Box fontWeight='bold' textTransform='uppercase' py='2' color='#877457'>
                                Mon, Aug 16 @ 10:45 PM NPT
                            </Box>
                            <Box fontWeight='bold' color='#212121'>
                                VOLUNTEER COMMITTEE NEEDED FROM OUR GROUP FOR 911 EVENT TBA on
                                SEPT. 11th 2021
                            </Box>
                        </Box>
                        {/* 2nd column */}
                        <Box cursor='pointer' borderRadius='7px' border='1px' borderColor='gray.300' p='15px' width='100%' align='left'>
                            <Box d='flex' alignItems='center'>
                                <Image position='relative' borderRadius='7px' w='50px' mr='15px' src={popularImage} alt='brand' ></Image>
                                <Heading alignItems='center' as='h6' fontWeight='black' size='md'>
                                    Vintage 1960 Minneapolis
                                </Heading>
                            </Box>
                            <Divider my='3' mb='2'/>
                            <Box fontWeight='bold' textTransform='uppercase' py='2' color='#877457'>
                                Sat, Aug 14 @ 7:15 AM NPT
                            </Box>
                            <Box fontWeight='bold' color='#212121'>
                                Belfast Cowboys @ Irish Fair (St. Paul Harriet Island) - Friday
                            </Box>
                        </Box>
                        {/* 3rd column */}
                        <Box cursor='pointer' borderRadius='7px' border='1px' borderColor='gray.300' p='15px' width='100%' align='left'>
                            <Box d='flex' alignItems='center'>
                                <Image position='relative' borderRadius='7px' w='50px' mr='15px' src={popularImage} alt='brand' ></Image>
                                <Heading alignItems='center' as='h6' fontWeight='black' size='md'>
                                    Reno/Sparks Singles and/or Diners and Activities Group
                                </Heading>
                            </Box>
                            <Divider my='3' mb='2'/>
                            <Box fontWeight='bold' textTransform='uppercase' py='2' color='#877457'>
                                Sat, Aug 14 @ 5:15 AM NPT
                            </Box>
                            <Box fontWeight='bold' color='#212121'>
                                Afterwork fun at Terrace Lounge
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Popular
