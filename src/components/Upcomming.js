import React from 'react'
import { Box, Container, Grid, Heading, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import Upcommingone from '../assets/upcomming-one.png'
import sageAdebayo from '../assets/segun_adebayo.jpg'
import Upcommingtwo from '../assets/upcomming-two.jpg'
import Upcommingthree from '../assets/upcomming-three.jpg'
import Upcommingfour from '../assets/upcomming-four.jpg'

const Upcomming = () => {
    return (
        <div>
            <Box mt='20'>
                <Container maxWidth='container.xl'>
                    <Box display='flex' alignItems='center' justifyContent='space-between' mb='7'>
                        <Box>
                            <Heading as='h3' alignItems='center' size='lg'>
                                Upcoming online events
                            </Heading>
                        </Box>
                        <Box>
                            <Link fontWeight='semibold' color='teal.500'>
                                Explore more events
                            </Link>
                        </Box>
                    </Box>

                    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                        <Box width='100%' align='left'>
                            <Box position='relative'>
                                <Image position='relative' w='100%' src={Upcommingone} alt='brand'></Image>
                                <Box position='absolute' d='flex' alignItems='center' borderRadius='5px' top='0' background='white' fontSize='sm' m='2' px='3' py='1'>
                                    <svg
                                        data-swarm-icon="true"
                                        width="18"
                                        height="18"
                                        fill="#757575"
                                        ml="4"
                                        d="block"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path d="M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z"></path>
                                    </svg>
                                    <Box ml='2' fontWeight='semibold' color='#757575'>
                                        Online Event
                                    </Box>
                                </Box>
                            </Box>
                            <Box fontWeight='semibold' mt='3' color='#877457'>
                                Sat, Aug 14 @ 9:45 PM NPT
                            </Box>
                            <Heading as='h6' mt='1' size='sm' fontWeight='black' alignItems='center'>
                                Upcoming online events
                            </Heading>
                            <Box my='3' size='xs'>
                                Remote-Working Group
                            </Box>
                            <Box d='flex' alignItems='center' justifyContent='space-between'>
                                <Box d='flex' alignItems='center'>
                                    <Image borderRadius='50%' border='1px' borderColor='gray.200' boxSize='40px' mr='-8px' src={sageAdebayo} alt="Segun Adebayo"></Image>
                                    <Image borderRadius='50%' border='1px' borderColor='gray.200' boxSize='40px' mr='-8px' src={sageAdebayo} alt="Segun Adebayo"></Image>
                                    <Image borderRadius='50%' border='1px' borderColor='gray.200' boxSize='40px' mr='-8px' src={sageAdebayo} alt="Segun Adebayo"></Image>
                                    <Box ml='16px' color='#757575'>134</Box>
                                </Box>
                                <Box>
                                    <svg
                                        data-swarm-icon="true"
                                        height="18"
                                        width="18"
                                        viewBox="0 0 18 18"
                                        >
                                        <path d="M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z"></path>
                                    </svg>
                                </Box>
                            </Box>
                        </Box>
                        {/* 2nd column */}
                        <Box width='100%' align='left'>
                            <Box position='relative'>
                            <Image position='relative' w='100%' src={Upcommingtwo} alt='brand'></Image>
                                <Box position='absolute' d='flex' alignItems='center' borderRadius='5px' top='0' background='white' fontSize='sm' m='2' px='3' py='1'>
                                    <svg
                                        data-swarm-icon="true"
                                        width="18"
                                        height="18"
                                        fill="#757575"
                                        ml="4"
                                        d="block"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path d="M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z"></path>
                                    </svg>
                                    <Box ml='2' fontWeight='semibold' color='#757575'>
                                        Online Event
                                    </Box>
                                </Box>
                            </Box>
                            <Box mt="3" color="#877457" fontWeight="semibold">
                                Sat, Aug 14 @ 9:45 PM NPT
                            </Box>
                            <Heading as='h6' mt='1' size='sm' fontWeight='black' alignItems='center'>
                                Upcoming online events
                            </Heading>
                            <Box my='3' size='xs'>
                                Remote-Working Group
                            </Box>
                            <Box d='flex' alignItems='center' justifyContent='space-between'>
                                <Box d='flex' alignItems='center'>
                                    <Image borderRadius='50%' border='1px' borderColor='gray.200' boxSize='40px' mr='-8px' src={sageAdebayo} alt="Segun Adebayo"></Image>
                                    <Image borderRadius='50%' border='1px' borderColor='gray.200' boxSize='40px' mr='-8px' src={sageAdebayo} alt="Segun Adebayo"></Image>
                                    <Image borderRadius='50%' border='1px' borderColor='gray.200' boxSize='40px' mr='-8px' src={sageAdebayo} alt="Segun Adebayo"></Image>
                                    <Box ml='16px' color='#757575'>134</Box>
                                </Box>
                                <Box>
                                    <svg
                                        data-swarm-icon="true"
                                        height="18"
                                        width="18"
                                        viewBox="0 0 18 18"
                                        >
                                        <path d="M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z"></path>
                                    </svg>
                                </Box>
                            </Box>
                        </Box>
                        {/* 3rd column */}
                        <Box width='100%' align='left'>
                            <Box position='relative'>
                                <Image position='relative' w='100%' src={Upcommingthree} alt='brand'></Image>
                                <Box position='absolute' d='flex' alignItems='center' borderRadius='5px' top='0' background='white' fontSize='sm' m='2' px='3' py='1'>
                                    <svg
                                        data-swarm-icon="true"
                                        width="18"
                                        height="18"
                                        fill="#757575"
                                        ml="4"
                                        d="block"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path d="M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z"></path>
                                    </svg>
                                    <Box ml='2' fontWeight='semibold' color='#757575'>
                                        Online Event
                                    </Box>
                                </Box>
                            </Box>
                            <Box mt="3" color="#877457" fontWeight="semibold">
                                Sat, Aug 14 @ 9:45 PM NPT
                            </Box>
                            <Heading as='h6' mt='1' size='sm' fontWeight='black' alignItems='center'>
                                Upcoming online events
                            </Heading>
                            <Box my='3' size='xs'>
                                Remote-Working Group
                            </Box>
                            <Box d='flex' alignItems='center' justifyContent='space-between'>
                                <Box d='flex' alignItems='center'>
                                    <Image borderRadius='50%' border='1px' borderColor='gray.200' boxSize='40px' mr='-8px' src={sageAdebayo} alt="Segun Adebayo"></Image>
                                    <Image borderRadius='50%' border='1px' borderColor='gray.200' boxSize='40px' mr='-8px' src={sageAdebayo} alt="Segun Adebayo"></Image>
                                    <Image borderRadius='50%' border='1px' borderColor='gray.200' boxSize='40px' mr='-8px' src={sageAdebayo} alt="Segun Adebayo"></Image>
                                    <Box ml='16px' color='#757575'>134</Box>
                                </Box>
                                <Box>
                                    <svg
                                        data-swarm-icon="true"
                                        height="18"
                                        width="18"
                                        viewBox="0 0 18 18"
                                        >
                                        <path d="M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z"></path>
                                    </svg>
                                </Box>
                            </Box>
                        </Box>
                        {/* 4th column */}
                        <Box width='100%' align='left'>
                            <Box position='relative'>
                            <Image position='relative' w='100%' src={Upcommingthree} alt='brand'></Image>
                                <Box position='absolute' d='flex' alignItems='center' borderRadius='5px' top='0' background='white' fontSize='sm' m='2' px='3' py='1'>
                                    
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Upcomming
